import { AppContext } from '@/context/AppContext'
import { useContext, useEffect, lazy } from 'react'
import { Navigate, Outlet, useNavigate, useRoutes } from 'react-router-dom'

import { privateURL, publicURL } from './urls'

// pages
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const SingIn = lazy(() => import('@/pages/SignIn'))

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ user }: { user: string }) => {
  if (user) {
    return <Outlet />
  }

  return <Navigate to={publicURL.SIGNIN} />
}

const Router = () => {
  const { user } = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate(publicURL.SIGNIN)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const routes = useRoutes([
    {
      element: <ProtectedRoute user={'user'} />,
      children: [
        {
          path: privateURL.DASHBOARD,
          element: <Dashboard />
        }
      ]
    },
    {
      path: publicURL.SIGNIN,
      element: <SingIn />
    }
  ])

  return routes
}

export default Router
