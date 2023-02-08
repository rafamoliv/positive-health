import * as React from 'react'
import { Navigate, Outlet, useNavigate, useRoutes } from 'react-router-dom'

import { privateURL, publicURL } from './urls'

// pages
const Dashboard = React.lazy(() => import('@/pages/Dashboard'))
const SingIn = React.lazy(() => import('@/pages/SignIn'))

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ user }: { user: string }) => {
  if (user) {
    return <Outlet />
  }

  return <Navigate to={publicURL.SIGNIN} />
}

const Router = () => {
  const navigate = useNavigate()

  React.useEffect(() => {
    if (true) {
      navigate(privateURL.DASHBOARD)
    } else {
      navigate(publicURL.SIGNIN)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
