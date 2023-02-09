import { useContext, useEffect, lazy } from 'react'
import { Navigate, Outlet, useNavigate, useRoutes } from 'react-router-dom'

import { privateURL, publicURL } from './urls'

import { AppContext } from '@/context/AppContext'

/**
 * Pages with lazy import
 */
const SingIn = lazy(() => import('@/pages/SignIn'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Appointment = lazy(() => import('@/pages/Appointment'))
const Schedule = lazy(() => import('@/pages/Schedule'))

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ user }: { user: object }) => {
  if (user) {
    return <Outlet />
  }

  return <Navigate to={publicURL.SIGNIN} />
}

const Router = () => {
  const { user } = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (false) navigate(publicURL.SIGNIN)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const routes = useRoutes([
    {
      element: <ProtectedRoute user={'user as object'} />,
      children: [
        {
          path: privateURL.DASHBOARD,
          element: <Dashboard />
        },
        {
          path: privateURL.APPOINTMENTS,
          element: <Appointment />
        },
        {
          path: privateURL.SCHEDULING,
          element: <Schedule />
        },
        {
          path: '*',
          element: <Navigate to={privateURL.DASHBOARD} />
        }
      ]
    },
    {
      path: publicURL.SIGNIN,
      element: <SingIn />
    },
    {
      path: '*',
      element: <Navigate to={publicURL.SIGNIN} />
    }
  ])

  return routes
}

export default Router
