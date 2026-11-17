import { createHashRouter, Navigate } from 'react-router-dom'
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
        path: '/users/register',
        lazy: async () => {
          const { default: Dashboard } = await import('../pages/Home')
          return { Component: Dashboard }
        },
      },
      {
        path: '/authors/register',
        lazy: async () => {
          const { default: Authors } = await import('../pages/Authors')
          return { Component: Authors }
        },
      },
      {
        path: '/genres/register',
        lazy: async () => {
          const { default: Genres } = await import('../pages/Genres')
          return { Component: Genres }
        },
      },
      {
        path: '/books/register',
        lazy: async () => {
          const { default: Books } = await import('../pages/Books')
          return { Component: Books }
        },
      },
      {
        path: '/copies/register',
        lazy: async () => {
          const { default: Copies } = await import('../pages/Copies')
          return { Component: Copies }
        },
      },
      {
        path: '/copies/search',
        lazy: async () => {
          const { default: CopySearch } = await import('../pages/CopySearch')
          return { Component: CopySearch }
        },
      },
      {
        path: '/copies/search/:copyId',
        lazy: async () => {
          const { default: CopySearch } = await import('../pages/CopySearch')
          return { Component: CopySearch }
        },
      },
      {
        path: '/loan-rules',
        lazy: async () => {
          const { default: LoanRules } = await import('../pages/LoanRules')
          return { Component: LoanRules }
        },
      },
      { path: '/home', element: <Navigate replace to="/users/register" /> },
      { path: '/authors', element: <Navigate replace to="/authors/register" /> },
      { path: '/genres', element: <Navigate replace to="/genres/register" /> },
      { path: '/books', element: <Navigate replace to="/books/register" /> },
      { path: '/copies', element: <Navigate replace to="/copies/register" /> },
    ],
  },
])
