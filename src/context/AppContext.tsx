import { useState, createContext } from 'react'

import config from './AppContext.config'
import { AppContextProps, AppProviderProps } from './types'

export const AppContext = createContext<Partial<AppContextProps>>({})

export const AppContextProvider = (props: AppProviderProps) => {
  const [user, setUser] = useState<string | null>('null')

  const handleSignIn = (email: string) => {
    try {
      setUser(email)
    } catch (error) {
      console.warn(error)
    }
  }

  const handleSignOut = () => {
    try {
      setUser(null)
    } catch (error) {
      console.warn(error)
    }
  }

  return (
    <AppContext.Provider
      value={{ user, handleSignIn, handleSignOut, schedule: config.schedule }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
