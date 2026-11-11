import { useCallback, useEffect, useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'

type Profile = 'STUDENT' | 'PROFESSOR'
type LoanRule = Awaited<ReturnType<typeof window.authAPI.listLoanRules>>[number]
type RuleValues = Pick<LoanRule, 'loanPeriodDays' | 'maxSimultaneousLoans' | 'maxRenewals' | 'renewalPeriodDays' | 'blockingDaysPerOverdueDay'>

const emptyValues: RuleValues = { loanPeriodDays: 30, maxSimultaneousLoans: 3, maxRenewals: 2, renewalPeriodDays: 15, blockingDaysPerOverdueDay: 2 }
const fieldClass = 'h-[42px] w-full rounded-[7px] border border-[#cbd1dc] bg-white px-[10px] text-[13px] text-[#34415a] outline-none focus:border-[#315bbd] focus:ring-2 focus:ring-[#315bbd]/15'

function valuesFromRule(rule: LoanRule): RuleValues {
  return {
    loanPeriodDays: rule.loanPeriodDays,
    maxSimultaneousLoans: rule.maxSimultaneousLoans,
    maxRenewals: rule.maxRenewals,
    renewalPeriodDays: rule.renewalPeriodDays,
    blockingDaysPerOverdueDay: rule.blockingDaysPerOverdueDay,
  }
}

function numberInput(value: number, onChange: (value: number) => void, suffix: string, min: number, max: number) {
  return <div className="flex h-[42px] items-center rounded-[7px] border border-[#cbd1dc] bg-white focus-within:border-[#315bbd] focus-within:ring-2 focus-within:ring-[#315bbd]/15">
    <input type="number" min={min} max={max} step={1} required value={value} onChange={(event) => onChange(event.target.value === '' ? 0 : Number(event.target.value))} className="h-full min-w-0 flex-1 rounded-[7px] bg-transparent px-[10px] text-[13px] text-[#34415a] outline-none" />
    <span className="shrink-0 px-[10px] text-[11px] text-[#7b8493]">{suffix}</span>
  </div>
}

export default function LoanRules() {
  const [profile, setProfile] = useState<Profile>('STUDENT')
  const [rules, setRules] = useState<Partial<Record<Profile, LoanRule>>>({})
  const [values, setValues] = useState<RuleValues>(emptyValues)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [savedRule, setSavedRule] = useState<LoanRule | null>(null)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  const loadRules = useCallback(async (selectedProfile: Profile) => {
    setLoading(true)
    setError('')
    try {
      const result = await window.authAPI.listLoanRules()
      const nextRules = Object.fromEntries(result.map((rule) => [rule.profile, rule])) as Partial<Record<Profile, LoanRule>>
      setRules(nextRules)
      setValues(nextRules[selectedProfile] ? valuesFromRule(nextRules[selectedProfile]!) : emptyValues)
    } catch {
      setError('Não foi possível carregar as regras. Verifique sua sessão e tente novamente.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { void loadRules(profile) }, [loadRules, profile])

  const change = (key: keyof RuleValues) => (value: number) => {
    setValues((current) => ({ ...current, [key]: value }))
    setNotice('')
  }

  const discard = () => {
    const original = rules[profile]
    setValues(original ? valuesFromRule(original) : emptyValues)
    setError('')
    setNotice('Alterações descartadas.')
  }

  const save = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const hasChanges = summaryRows.some(({ key }) => (rules[profile]?.[key] ?? emptyValues[key]) !== values[key])
    if (!hasChanges) {
      setError('')
      setNotice('Nenhuma alteração foi feita. Altera ao menos um valor para salvar')
      return
    }
    setError('')
    setNotice('')
    setConfirmOpen(true)
  }

  const confirmSave = async () => {
    setSaving(true)
    try {
      const updated = await window.authAPI.updateLoanRule({ profile, ...values })
      setRules((current) => ({ ...current, [profile]: updated }))
      setValues(valuesFromRule(updated))
      setConfirmOpen(false)
      setSavedRule(updated)
    } catch (saveError) {
      const message = saveError instanceof Error ? saveError.message : ''
      setError(message.includes('LOAN_RULE_INPUT_INVALID') ? 'Confira os limites permitidos para cada campo e tente novamente.' : 'Não foi possível salvar as regras. Verifique sua sessão e tente novamente.')
    } finally {
      setSaving(false)
    }
  }

  const field = (label: string, key: keyof RuleValues, suffix: string, min: number, max: number) => {
    const previous = rules[profile]?.[key] ?? emptyValues[key]
    const altered = previous !== values[key]

    return <label className="flex min-w-0 flex-col gap-[6px] text-[12px] font-semibold text-[#26344c]">
    <span className="flex flex-wrap items-center gap-x-2 gap-y-1">{label} <span aria-hidden="true">*</span>{altered && <span className="rounded bg-[#fff1b8] px-1.5 py-0.5 text-[10px] font-semibold text-[#805b00]">Alterado (antes: {previous})</span>}</span>
    {numberInput(values[key], change(key), suffix, min, max)}
  </label>
  }

  const summaryRows: { label: string; key: keyof RuleValues; unit: string }[] = [
    { label: 'Prazo de empréstimo', key: 'loanPeriodDays', unit: 'dias' },
    { label: 'Limite de empréstimos simultâneos', key: 'maxSimultaneousLoans', unit: 'empréstimos' },
    { label: 'Número máximo de renovações', key: 'maxRenewals', unit: 'renovações' },
    { label: 'Prazo de cada renovação', key: 'renewalPeriodDays', unit: 'dias' },
    { label: 'Dias de bloqueio por dia de atraso', key: 'blockingDaysPerOverdueDay', unit: 'dias de bloqueio' },
  ]

  if (savedRule) {
    const savedValues = valuesFromRule(savedRule)
    return <DashboardLayout>
      <div className="mx-auto w-full max-w-[724px]">
        <header>
          <h1 className="text-[22px] font-bold leading-[27px] tracking-[-0.5px] text-[#151515]">Regras atualizadas</h1>
        </header>
        <section className="mt-[12px] rounded-[9px] bg-white px-5 py-6 shadow-[0_3px_14px_rgba(31,48,79,0.07)] sm:px-[30px] sm:py-[29px]">
          <h2 className="text-[14px] font-semibold leading-5 text-[#19294c]">Regras salvas com sucesso</h2>
          <p className="text-[14px] leading-5 text-[#718096]">As novas regras já valem para os próximos empréstimos e devoluções</p>
          <dl className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 text-[13px] leading-5 sm:grid-cols-2">
            <div><dt className="text-[#718096]">Perfil</dt><dd className="font-semibold text-[#19294c]">{savedRule.profile === 'STUDENT' ? 'Aluno' : 'Professor'}</dd></div>
            {summaryRows.map(({ label, key, unit }) => <div key={key}><dt className="text-[#718096]">{label}</dt><dd className="font-semibold text-[#19294c]">{savedValues[key]} {unit}</dd></div>)}
          </dl>
          <p role="status" className="mt-5 rounded-[8px] bg-[#e5f5ee] px-4 py-3 text-[13px] font-semibold text-[#096644]">Regras registradas com sucesso</p>
          <div className="mt-5 flex justify-end">
            <button type="button" onClick={() => setSavedRule(null)} className="h-[41px] rounded-[8px] bg-[#2e56b2] px-7 text-[13px] font-semibold text-white">Concluir</button>
          </div>
        </section>
      </div>
    </DashboardLayout>
  }

  return <DashboardLayout>
    <div className="mx-auto w-full max-w-[724px]">
      <header>
        <h1 className="text-[22px] font-bold leading-[27px] tracking-[-0.5px] text-[#1b2945]">Regras de empréstimo</h1>
        <p className="text-[12px] leading-[17px] text-[#718096]">Cada perfil tem seu próprio conjunto de regras. Todos os campos são obrigatórios.</p>
      </header>

      <section className="mt-[12px] rounded-[11px] bg-white px-5 py-6 shadow-[0_3px_14px_rgba(31,48,79,0.07)] sm:px-[21px] sm:py-[22px]">
        <form onSubmit={save} className="space-y-[15px]">
          <fieldset disabled={loading || saving}>
            <legend className="mb-[5px] text-[11px] font-semibold text-[#26344c]">Perfil</legend>
            <div className="flex gap-[7px]">
              {(['STUDENT', 'PROFESSOR'] as const).map((item) => <button key={item} type="button" onClick={() => { setValues(rules[item] ? valuesFromRule(rules[item]!) : emptyValues); setProfile(item); setNotice(''); setError('') }} aria-pressed={profile === item} className={`h-[32px] min-w-[66px] rounded-[7px] border px-4 text-[11px] font-semibold transition-colors ${profile === item ? 'border-[#315fca] bg-[#315fca] text-white' : 'border-[#cbd1dc] bg-white text-[#26344c] hover:bg-[#f5f7fb]'}`}>
                {item === 'STUDENT' ? 'Aluno' : 'Professor'}
              </button>)}
            </div>
          </fieldset>

          {error && <p role="alert" className="rounded-md bg-[#fff0f0] px-3 py-2 text-[12px] text-[#b42332]">{error}</p>}
          {notice && <p role="status" className={`rounded-md px-3 py-2 text-[12px] ${notice.startsWith('Nenhuma alteração') ? 'bg-[#EAF2FF] text-[#2E56B2]' : 'bg-[#eaf7f0] text-[#16734b]'}`}>{notice}</p>}
          {loading ? <p role="status" className="py-8 text-center text-[13px] text-[#718096]">Carregando regras...</p> : <>
            <div className="grid gap-x-[14px] gap-y-[13px] sm:grid-cols-2">
              {field('Prazo de empréstimo', 'loanPeriodDays', 'dias', 1, 60)}
              {field('Limite de empréstimos simultâneos', 'maxSimultaneousLoans', 'empréstimos', 1, 5)}
              <div>
                {field('Número máximo de renovações por empréstimo', 'maxRenewals', 'renovações', 0, 4)}
                <p className="mt-[4px] text-[10px] text-[#7b8493]">0 = o perfil não pode renovar.</p>
              </div>
              {field('Prazo de cada renovação', 'renewalPeriodDays', 'dias', 1, 30)}
              <div>
                {field('Dias de bloqueio por dia de atraso', 'blockingDaysPerOverdueDay', 'dias de bloqueio', 0, 90)}
                <p className="mt-[4px] text-[10px] text-[#7b8493]">0 = sem bloqueio por atraso.</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-[3px] sm:flex-row sm:items-center">
              <p className="flex-1 text-[10px] leading-4 text-[#7b8493]">As alterações valem só para empréstimos e renovações feitos depois de salvar.</p>
              <div className="flex justify-end gap-[7px]">
                <button type="button" onClick={discard} className="h-[36px] rounded-[7px] border border-[#cbd1dc] bg-white px-[15px] text-[11px] font-semibold text-[#26344c] hover:bg-[#f5f7fb]">Descartar alterações</button>
                <button type="submit" disabled={saving} className="h-[36px] rounded-[7px] bg-[#315fca] px-[17px] text-[11px] font-semibold text-white hover:bg-[#284fae] disabled:opacity-60">Salvar alterações</button>
              </div>
            </div>
          </>}
        </form>
      </section>
    </div>
    {confirmOpen && <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#101828]/45 px-4 py-6" onMouseDown={(event) => { if (event.target === event.currentTarget && !saving) setConfirmOpen(false) }}>
      <section role="dialog" aria-modal="true" aria-labelledby="loan-confirm-title" className="my-auto w-full max-w-[560px] rounded-[10px] bg-white p-5 shadow-[0_16px_50px_rgba(16,24,40,0.24)] sm:p-7">
        <h2 id="loan-confirm-title" className="text-[18px] font-bold leading-6 text-[#1b2945]">Confirmar alterações</h2>
        <p className="mt-1 text-[12px] text-[#718096]">Perfil: <strong className="text-[#34415a]">{profile === 'STUDENT' ? 'Aluno' : 'Professor'}</strong>. Confira o que vai mudar antes de salvar.</p>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[440px] border-collapse text-left text-[11px]">
            <thead><tr className="border-b border-[#e2e5eb] text-[#737d8e]"><th className="pb-2 pr-3 font-medium">Parâmetro</th><th className="pb-2 pr-3 font-medium">Valor anterior</th><th className="pb-2 font-medium">Novo valor</th></tr></thead>
            <tbody>{summaryRows.filter(({ key }) => (rules[profile]?.[key] ?? emptyValues[key]) !== values[key]).map(({ label, key, unit }) => {
              const previous = rules[profile]?.[key] ?? emptyValues[key]
              const next = values[key]
              return <tr key={key} className="border-b border-[#e8eaf0] last:border-0"><th className="py-[10px] pr-3 font-semibold text-[#26344c]">{label}</th><td className="py-[10px] pr-3 text-[#737d8e]">{previous} {unit}</td><td className="py-[10px] font-bold text-[#315fca]">{next} {unit}</td></tr>
            })}</tbody>
          </table>
          {summaryRows.every(({ key }) => (rules[profile]?.[key] ?? emptyValues[key]) === values[key]) && <p className="py-4 text-[12px] text-[#718096]">Nenhum valor foi alterado.</p>}
        </div>

        <p className="mt-4 rounded-[7px] bg-[#eaf3fc] px-3 py-[11px] text-[11px] leading-4 text-[#365a7e]">Empréstimos em andamento mantêm o prazo de devolução já definido.</p>
        {error && <p role="alert" className="mt-3 rounded-md bg-[#fff0f0] px-3 py-2 text-[12px] text-[#b42332]">{error}</p>}
        <div className="mt-4 flex flex-col-reverse justify-end gap-2 sm:flex-row">
          <button type="button" disabled={saving} onClick={() => setConfirmOpen(false)} className="h-[38px] rounded-[7px] border border-[#cbd1dc] bg-white px-4 text-[11px] font-semibold text-[#26344c] hover:bg-[#f5f7fb] disabled:opacity-60">Voltar e revisar</button>
          <button type="button" disabled={saving} onClick={() => void confirmSave()} className="h-[38px] rounded-[7px] bg-[#315fca] px-4 text-[11px] font-semibold text-white hover:bg-[#284fae] disabled:opacity-60">{saving ? 'Salvando...' : 'Confirmar e salvar'}</button>
        </div>
      </section>
    </div>}
  </DashboardLayout>
}
