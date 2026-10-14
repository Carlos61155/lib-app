import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export function SessionTimeoutGuard() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname !== '/home') return

    let cancelled = false
    let timeoutId: number | undefined
    let lastActivityRequestAt = 0
    let cleanup = () => {}

    const goToLogin = (sessionExpired: boolean) => {
      navigate('/', {
        replace: true,
        state: sessionExpired ? { sessionExpired: true } : null,
      })
    }

    const startSessionMonitor = async () => {
      try {
        const session = await window.authAPI.getSession()
        if (cancelled) return
        if (!session) {
          goToLogin(false)
          return
        }

        const resetTimeout = () => {
          if (timeoutId !== undefined) window.clearTimeout(timeoutId)
          timeoutId = window.setTimeout(() => {
            void checkSessionActivity()
          }, session.idleTimeoutMs)
        }

        const checkSessionActivity = async () => {
          try {
            const active = await window.authAPI.activity()
            if (cancelled) return
            if (!active) {
              goToLogin(true)
              return
            }
            resetTimeout()
          } catch {
            if (!cancelled) goToLogin(true)
          }
        }

        const onUserActivity = () => {
          resetTimeout()
          const now = Date.now()
          if (now - lastActivityRequestAt < 1000) return
          lastActivityRequestAt = now
          void window.authAPI.activity().then((active) => {
            if (!cancelled && !active) goToLogin(true)
          }).catch(() => {
            if (!cancelled) goToLogin(true)
          })
        }

        resetTimeout()
        window.addEventListener('pointerdown', onUserActivity)
        window.addEventListener('keydown', onUserActivity)
        window.addEventListener('mousemove', onUserActivity)
        window.addEventListener('touchstart', onUserActivity)

        cleanup = () => {
          window.removeEventListener('pointerdown', onUserActivity)
          window.removeEventListener('keydown', onUserActivity)
          window.removeEventListener('mousemove', onUserActivity)
          window.removeEventListener('touchstart', onUserActivity)
        }
      } catch {
        if (!cancelled) goToLogin(false)
      }
    }

    void startSessionMonitor()

    return () => {
      cancelled = true
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
      cleanup()
    }
  }, [location.pathname, navigate])

  return <Outlet />
}
