import type { ReactNode } from 'react'
import { SidebarMenu } from '@/components/SidebarMenu'
import { Header } from '@/components/Header'

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#eeeeee] lg:grid lg:grid-cols-[254px_minmax(0,1fr)]">
      <SidebarMenu />

      <div className="min-w-0">
        <Header />
        <main className="min-w-0 px-5 py-9 sm:px-8 lg:px-12 lg:pb-16 lg:pt-[50px] xl:px-[48px]">
          {children}
        </main>
      </div>
    </div>
  )
}
