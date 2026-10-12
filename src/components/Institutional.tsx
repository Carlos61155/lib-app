import { BookOpen } from 'lucide-react'

const backgroundImage = new URL('../utils/background.png', import.meta.url).href
const booksImage = new URL('../utils/livros.png', import.meta.url).href

export function Institutional() {
  return (
    <section
      aria-label="Biblioteca IFCE"
      className="relative flex min-h-[420px] flex-col overflow-hidden bg-cover bg-center px-8 py-8 text-white sm:px-12 sm:py-9 lg:min-h-screen lg:w-[52.5%] lg:px-[10%]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex items-center gap-2.5">
        <span className="flex size-11 items-center justify-center rounded-full border-[3px] border-[#f5bd35] text-white">
          <BookOpen aria-hidden="true" className="size-5 stroke-[1.5]" />
        </span>
        <span className="text-sm font-bold tracking-tight">Biblioteca IFCE</span>
      </div>

      <img
        src={booksImage}
        alt="Livros coloridos organizados em uma prateleira"
        className="absolute left-1/2 top-[48%] w-[min(70%,390px)] -translate-x-1/2 -translate-y-1/2"
      />

      <h2 className="mt-auto max-w-[390px] text-[26px] font-bold leading-[1.2] tracking-tight sm:text-[28px]">
        Gestão de acervo,
        <br />
        empréstimos e leitores
      </h2>
    </section>
  )
}
