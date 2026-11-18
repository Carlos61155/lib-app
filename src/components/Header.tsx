import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const pageLabels: Record<string, string[]> = {
  '/users/register': ['Usuários', 'Cadastrar usuário'],
  '/authors/register': ['Autores', 'Cadastrar autor'],
  '/genres/register': ['Gêneros', 'Cadastrar gênero'],
  '/books/register': ['Livros', 'Cadastrar livro'],
  '/books/search': ['Livros', 'Buscar Livro'],
  '/copies/register': ['Exemplares', 'Cadastrar exemplar'],
  '/copies/search': ['Exemplares', 'Buscar exemplar'],
  '/loan-rules': ['Regras de empréstimo'],
}

export function Header() {
  const { pathname } = useLocation()
  const [userName, setUserName] = useState('')
  const breadcrumb = pathname.startsWith('/copies/search/')
    ? ['Exemplares', 'Buscar exemplar', `Exemplar ${pathname.split('/')[pathname.split('/').length - 1]}`]
    : pathname.startsWith('/books/search/')
      ? ['Livros', 'Buscar Livro', 'Detalhes do livro']
    : pageLabels[pathname] ?? ['Usuários']

  useEffect(() => {
    let cancelled = false
    void window.authAPI.getSession().then((session) => {
      if (!cancelled && session) setUserName(session.user.name)
    }).catch(() => undefined)
    return () => { cancelled = true }
  }, [])

  return (
    <header className="flex min-h-[54px] items-center justify-between gap-4 border-b border-[#e6e8ed] bg-[#fffdfd] px-5 sm:px-8 lg:px-10">
      <nav aria-label="Navegação estrutural" className="flex min-w-0 items-center gap-2 text-[13px] sm:text-[14px]">
        {breadcrumb.map((part, index) => (
          <span key={part} className="flex min-w-0 items-center gap-2">
            {index > 0 && <ChevronRight aria-hidden="true" className="size-3.5 shrink-0 text-[#9aa2b1]" />}
            <span className={index === breadcrumb.length - 1 ? 'truncate font-semibold text-[#19294c]' : 'truncate text-[#718096]'}>{part}</span>
          </span>
        ))}
      </nav>
      <span className="shrink-0 text-[13px] font-semibold text-[#19294c] sm:text-[14px]">{userName}</span>
    </header>
  )
}
