import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  BookOpen,
  BookCopy,
  LogOut,
  Tags,
  UserRound,
  UsersRound,
  LibraryBig,
} from 'lucide-react'

const navigationItems = [
  { label: 'Usuários', icon: UsersRound },
  { label: 'Autores', icon: UserRound },
  { label: 'Gêneros', icon: Tags },
  { label: 'Livros', icon: BookOpen },
  { label: 'Exemplares', icon: BookCopy },
  { label: 'Regras de empréstimo', icon: LibraryBig },
]

export function DashboardLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const activeItem = pathname === '/authors' ? 'Autores' : pathname === '/genres' ? 'Gêneros' : 'Usuários'

  return (
    <div className="min-h-screen bg-[#eeeeee] lg:grid lg:grid-cols-[254px_minmax(0,1fr)]">
      <aside className="flex min-h-[92px] flex-col bg-[#315bbd] px-[7px] py-6 text-white lg:min-h-screen lg:px-[7px] lg:py-[27px]">
        <div className="mb-6 flex items-center gap-[9px] px-5 lg:mb-[25px] lg:px-[20px]">
          <span className="flex size-[52px] shrink-0 items-center justify-center rounded-full border-[5px] border-[#f3bd35]">
            <BookOpen aria-hidden="true" className="size-[24px] stroke-[1.5]" />
          </span>
          <span className="whitespace-nowrap text-[17px] font-bold tracking-[-0.4px]">Biblioteca IFCE</span>
        </div>

        <nav aria-label="Navegação principal" className="grid grid-cols-2 gap-1 lg:flex lg:flex-col lg:gap-[8px]">
          {navigationItems.map(({ label, icon: Icon }) => {
            const isActive = activeItem === label
            const className = `flex min-h-[49px] items-center gap-3 rounded-[9px] px-4 text-[14px] font-semibold ${isActive ? 'bg-[#5680dc]' : 'text-white'}`
            const contents = <><Icon aria-hidden="true" className="size-[17px] shrink-0" /><span>{label}</span></>

            if (label === 'Usuários' || label === 'Autores' || label === 'Gêneros') {
              const to = label === 'Autores' ? '/authors' : label === 'Gêneros' ? '/genres' : '/home'
              return <Link key={label} to={to} aria-current={isActive ? 'page' : undefined} className={className}>{contents}</Link>
            }

            return <div key={label} className={className}>{contents}</div>
          })}
        </nav>

        <div className="mt-5 flex min-h-[38px] items-center gap-3 px-4 text-[14px] font-semibold lg:mt-auto lg:px-[19px]">
          <LogOut aria-hidden="true" className="size-[17px]" />
          <span>Sair</span>
        </div>
      </aside>

      <main className="min-w-0 px-5 py-9 sm:px-8 lg:px-12 lg:pb-16 lg:pt-[50px] xl:px-[48px]">
        {children}
      </main>
    </div>
  )
}
