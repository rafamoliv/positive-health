/* eslint-disable no-unused-vars */
import { ReactNode } from 'react'

interface AppChildrenProps {
  children: ReactNode
}

export interface AppContextProps extends AppChildrenProps {
  handleSignIn: (email: string) => void
  handleSignOut: () => void
  user: string | null
}

export type AppProviderProps = AppChildrenProps
