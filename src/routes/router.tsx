import { createHashRouter } from 'react-router-dom'
import { SessionTimeoutGuard } from '@/components/SessionTimeoutGuard'

export const router = createHashRouter([
  {
    element: <SessionTimeoutGuard />,
    children: [
      {
        path: '/',
        lazy: async () => {
          const { default: Login } = await import('../pages/Login')
          return { Component: Login }
        },
      },
      {
        path: '/home',
        lazy: async () => {
          const { default: Dashboard } = await import('../pages/Home')
          return { Component: Dashboard }
        },
      },
      {
        path: '/authors',
        lazy: async () => {
          const { default: Authors } = await import('../pages/Authors')
          return { Component: Authors }
        },
      },
      {
        path: '/genres',
        lazy: async () => {
          const { default: Genres } = await import('../pages/Genres')
          return { Component: Genres }
        },
      },
    ],
  },
])
