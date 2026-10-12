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
    ],
  },
])
