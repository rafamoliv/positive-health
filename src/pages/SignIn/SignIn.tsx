import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useEffect } from 'react'
import { Figure } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { Form } from '@/components'

import { IconLogoPositiveHealth } from '@/assets'
import { AppContext } from '@/context/AppContext'
import { privateURL } from '@/routes/urls'
import { SignPage } from '@/templates'

export interface SignInFormData {
  email: string
  password: string
}

const sigInFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required()
})

const SignIn = () => {
  const { user, handleSignIn } = useContext(AppContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<SignInFormData>({
    mode: 'onChange',
    resolver: yupResolver(sigInFormSchema)
  })

  const onSubmit = ({ email }: { email: string }) => {
    handleSignIn?.(email)
  }

  useEffect(() => {
    if (user) navigate(privateURL.DASHBOARD)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  console.log(errors.email?.message, errors.password?.message, isValid)
  return (
    <SignPage>
      <Figure>
        <Figure.Image
          alt="PositiveHealth Logo"
          className="mb-4"
          src={IconLogoPositiveHealth}
          width={360}
        />
      </Figure>
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        <Form.Input
          error={errors.email?.message}
          id={'email'}
          placeholder="Email"
          register={register}
          type="text"
        />
        <Form.Input
          className="mb-1"
          error={errors.password?.message}
          id={'password'}
          placeholder="Password"
          register={register}
          type="password"
        />
        <Form.Button disabled={!isValid}>Sign In</Form.Button>
      </Form.Root>
    </SignPage>
  )
}

export default SignIn
