import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { IconLogoPositiveHealth } from '@/assets'
import { AppContext } from '@/context/AppContext'
import { privateURL } from '@/routes/urls'

const SignIn = () => {
  const { user, handleSignIn } = useContext(AppContext)
  const navigate = useNavigate()

  const handleSetSignIn = (email: string) => {
    handleSignIn?.(email)
  }

  useEffect(() => {
    if (user) navigate(privateURL.DASHBOARD)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <div>
      Login
      <figure>
        <img alt="PositiveHealth Logo" src={IconLogoPositiveHealth} />
      </figure>
      <button onClick={() => handleSetSignIn('teste@te.com')}>Entrar</button>
    </div>
  )
}

export default SignIn
