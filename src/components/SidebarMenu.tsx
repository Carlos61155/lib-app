import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  BookOpen,
  BookCopy,
  ChevronRight,
  LogOut,
  Tags,
  UserRound,
  UsersRound,
  LibraryBig,
} from 'lucide-react'

type NavigationItem = {
  label: string
  icon: typeof UsersRound
  to?: string
  children?: { label: string; to: string }[]
}

const navigationItems: NavigationItem[] = [
  { label: 'Usuários', icon: UsersRound, children: [{ label: 'Cadastrar usuário', to: '/users/register' }] },
  { label: 'Autores', icon: UserRound, children: [{ label: 'Cadastrar autor', to: '/authors/register' }] },
  { label: 'Gêneros', icon: Tags, children: [{ label: 'Cadastrar gênero', to: '/genres/register' }] },
  { label: 'Livros', icon: BookOpen, children: [
    { label: 'Buscar Livro', to: '/books/search' },
    { label: 'Cadastrar livro', to: '/books/register' },
  ] },
  {
    label: 'Exemplares',
    icon: BookCopy,
    children: [
      { label: 'Buscar exemplar', to: '/copies/search' },
      { label: 'Cadastrar exemplar', to: '/copies/register' },
    ],
  },
  { label: 'Regras de empréstimo', icon: LibraryBig, children: [{ label: 'Configurar regras', to: '/loan-rules' }] },
]

function getActiveLabel(pathname: string) {
  return navigationItems.find((item) => item.children?.some((child) =>
    child.to === pathname || (child.to === '/copies/search' && pathname.startsWith('/copies/search/')) || (child.to === '/books/search' && pathname.startsWith('/books/search/')),
  ))?.label ?? null
}

export function SidebarMenu() {
  const location = useLocation()
  const { pathname } = location
  const locationState = location.state as { expandedMenuItem?: string } | null
  const [expandedItem, setExpandedItem] = useState<string | null>(
    () => locationState?.expandedMenuItem ?? getActiveLabel(pathname),
  )
  const [selectedParent, setSelectedParent] = useState<{ label: string; pathname: string } | null>(null)
  const activeLabel = selectedParent?.pathname === pathname ? selectedParent.label : getActiveLabel(pathname)

  const toggleItem = (label: string) => {
    setSelectedParent({ label, pathname })
    setExpandedItem((current) => current === label ? null : label)
  }

  return (
    <aside className="flex min-h-[92px] flex-col bg-[#315bbd] px-[7px] py-6 text-white lg:min-h-screen lg:px-[7px] lg:py-[27px]">
      <div className="mb-6 flex items-center gap-[9px] px-5 lg:mb-[25px] lg:px-[20px]">
        <span className="flex size-[52px] shrink-0 items-center justify-center rounded-full border-[5px] border-[#f3bd35]">
          <BookOpen aria-hidden="true" className="size-[24px] stroke-[1.5]" />
        </span>
        <span className="whitespace-nowrap text-[17px] font-bold tracking-[-0.4px]">Biblioteca IFCE</span>
      </div>

      <nav aria-label="Navegação principal" className="grid grid-cols-2 gap-1 lg:flex lg:flex-col lg:gap-[8px]">
        {navigationItems.map(({ label, icon: Icon, to, children }) => {
          const isActive = activeLabel === label
          const isExpanded = expandedItem === label
          const itemClassName = `flex min-h-[45px] w-full items-center gap-3 rounded-[9px] px-4 py-2 text-left text-[14px] font-semibold ${isActive && children ? 'text-white' : isActive ? 'bg-[#5680dc] text-white' : 'text-white'}`
          const contents = <><Icon aria-hidden="true" className="size-[17px] shrink-0" /><span className="min-w-0 flex-1">{label}</span>{children && <ChevronRight aria-hidden="true" className={`size-4 shrink-0 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />}</>

          return (
            <div key={label} className={isActive && children && isExpanded ? 'rounded-[10px] border border-[#2850a8] bg-[#294fa9] p-0.5' : undefined}>
              {children ? (
                <button type="button" aria-expanded={isExpanded} onClick={() => toggleItem(label)} className={itemClassName}>
                  {contents}
                </button>
              ) : (
                <Link to={to!} aria-current={isActive ? 'page' : undefined} className={itemClassName}>
                  {contents}
                </Link>
              )}
              {children && isExpanded && (
                <div className="ml-[27px] mt-1 flex flex-col gap-1 border-l border-white/25 pl-3">
                  {children.map((child) => {
                    const isChildActive = pathname === child.to || (child.to === '/copies/search' && pathname.startsWith('/copies/search/')) || (child.to === '/books/search' && pathname.startsWith('/books/search/'))
                    return (
                      <Link key={child.label} to={child.to} state={{ expandedMenuItem: label }} aria-current={isChildActive ? 'page' : undefined} className={`flex min-h-[42px] items-center rounded-[8px] px-3 text-[13px] font-medium transition-colors ${isChildActive ? 'bg-[#5983df] text-white' : 'text-white/85 hover:bg-white/10 hover:text-white'}`}>
                        {child.label}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      <div className="mt-5 flex min-h-[38px] items-center gap-3 px-4 text-[14px] font-semibold lg:mt-auto lg:px-[19px]">
        <LogOut aria-hidden="true" className="size-[17px]" />
        <span>Sair</span>
      </div>
    </aside>
  )
}
