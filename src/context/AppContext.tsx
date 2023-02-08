import { faker } from '@faker-js/faker'
import { useState, createContext } from 'react'

import config from './AppContext.config'
import { AppContextProps, AppProviderProps, StateProps } from './types'

export const AppContext = createContext<Partial<AppContextProps>>({})

export const AppContextProvider = (props: AppProviderProps) => {
  const [user, setUser] = useState<StateProps | null>({
    avatar: null,
    name: null,
    email: null
  })

  const handleSignIn = (email: string) => {
    try {
      setUser({
        avatar: faker.image.avatar(),
        name: faker.name.firstName(),
        email
      })
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
