import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardLayout } from '@/components/DashboardLayout'
import { CopyRegistrationForm, type CopyRegistrationResult } from '@/components/CopyRegistrationForm'

const conditionLabels: Record<string, string> = { NEW: 'Novo', GOOD: 'Bom', FAIR: 'Regular', POOR: 'Ruim' }

export default function Copies() {
  const [registered, setRegistered] = useState<CopyRegistrationResult | null>(null)
  const [copyMessage, setCopyMessage] = useState('')
  const navigate = useNavigate()
  const codes = registered?.copies.map((copy) => copy.inventoryCode) ?? []

  const copyCodes = async () => {
    try {
      await navigator.clipboard.writeText(codes.join('\n'))
      setCopyMessage('Códigos copiados.')
    } catch {
      setCopyMessage('Não foi possível copiar automaticamente. Selecione e copie os códigos da lista.')
    }
  }

  return <DashboardLayout>
    <header className="mx-auto w-full max-w-[1000px] print:hidden">
      <h1 className="text-[22px] font-bold leading-[27px] tracking-[-0.5px] text-[#19294c]">{registered ? 'Exemplares adicionados' : 'Adicionar exemplares'}</h1>
      {!registered && <p className="text-[12px] leading-[17px] text-[#718096]">Escolha o livro e a quantidade. Os campos com * são obrigatórios.</p>}
    </header>
    {registered ? <>
      <section className="mx-auto mt-[22px] w-full max-w-[1000px] rounded-[12px] bg-white px-5 py-6 shadow-[0_8px_28px_rgba(24,43,82,0.06)] print:hidden sm:px-7 lg:px-[30px] lg:py-[28px]">
      <h2 className="text-[15px] font-bold leading-5 text-[#19294c]">{registered.copies.length} {registered.copies.length === 1 ? 'exemplar adicionado' : 'exemplares adicionados'} com sucesso.</h2>
      <p className="mt-1 text-[12px] leading-4 text-[#718096]">Livro: {registered.bookTitle}. Todos estão com status disponível.</p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[490px] border-collapse text-left text-[12px] text-[#52627f]">
          <thead><tr className="border-b border-[#dfe3ea] text-[11px] text-[#718096]"><th className="pb-2 pr-4 font-medium">Código de tombo</th><th className="pb-2 pr-4 font-medium">Estado</th><th className="pb-2 pr-4 font-medium">Localização</th><th className="pb-2 font-medium">Observação</th></tr></thead>
          <tbody>{registered.copies.map((copy) => <tr key={copy.inventoryCode} className="border-b border-[#e6e9ef] last:border-0"><td className="py-[10px] pr-4 font-mono font-bold text-[#19294c]">{copy.inventoryCode}</td><td className="py-[10px] pr-4">{conditionLabels[copy.conservationCondition] ?? copy.conservationCondition}</td><td className="py-[10px] pr-4">{copy.shelfLocation}</td><td className="py-[10px]">{copy.observation || '—'}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="mt-3 text-[11px] leading-5 text-[#718096]">Copie ou imprima os códigos para etiquetar cada exemplar.</p>
      <p role="status" className="mt-3 rounded-[7px] bg-[#e5f5ee] px-3 py-3 text-[12px] font-semibold text-[#096644]">Exemplares registrados com sucesso.</p>
      {copyMessage && <p role="status" className="mt-2 text-[12px] text-[#52627f]">{copyMessage}</p>}
      <div className="mt-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={() => void copyCodes()} className="h-[42px] rounded-[8px] border border-[#c6cedb] bg-white px-5 text-[12px] font-semibold text-[#19294c]">Copiar códigos</button>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={() => { setRegistered(null); setCopyMessage('') }} className="h-[42px] rounded-[8px] border border-[#c6cedb] bg-white px-5 text-[12px] font-semibold text-[#19294c]">Adicionar mais exemplares</button>
          <button type="button" onClick={() => navigate('/home')} className="h-[42px] min-w-[110px] rounded-[8px] bg-[#315bbd] px-5 text-[12px] font-semibold text-white">Concluir</button>
        </div>
      </div>
      </section>
    </> : <div className="print:hidden"><CopyRegistrationForm onSuccess={setRegistered} onCancel={() => navigate('/home')} /></div>}
  </DashboardLayout>
}
