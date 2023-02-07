import { IconLogoPositiveHealth } from '@/assets'
import { SystemPage } from '@/templates/SystemPage'

const SignIn = () => {
  return (
    <SystemPage>
      Login
      <figure>
        <img alt="PositiveHealth Logo" src={IconLogoPositiveHealth} />
      </figure>
      <button>Entrar</button>
    </SystemPage>
  )
}

export default SignIn
