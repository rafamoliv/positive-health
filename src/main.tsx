import { StrictMode, Suspense } from 'react'
import '@/styles/styles.scss'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import '@/locales/i18n'

import Store from '@/store'

import { AppContextProvider } from './context/AppContext'
import Routes from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={Store}>
      <AppContextProvider>
        <BrowserRouter>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes />
          </Suspense>
        </BrowserRouter>
      </AppContextProvider>
    </Provider>
  </StrictMode>
)
