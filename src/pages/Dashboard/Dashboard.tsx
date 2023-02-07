import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { Button } from '@/components'

import { reactLogo } from '@/assets/icons'
import { useFetchReposQuery } from '@/services/api'
import { SystemPage } from '@/templates/SystemPage'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation('pgHome')
  const { data = [] } = useFetchReposQuery()
  const [count, setCount] = React.useState(0)

  return (
    <SystemPage>
      <div>
        <div>
          <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
            <img alt="Vite logo" src="/vite.svg" />
          </a>
          <a href="https://reactjs.org" rel="noreferrer" target="_blank">
            <img alt="React logo" src={reactLogo} />
          </a>
        </div>

        <h1>{t('title')}</h1>
        <p>{t('summary')}</p>

        <div>
          <Button onClick={() => setCount((count) => count + 1)} primary>
            {t('count', { value: count })}
          </Button>
        </div>

        <div>
          <Button
            onClick={() => {
              alert(`Clicked! Change isInitialized to: ${'!isInitialized'}`)
            }}
            primary
          >
            {t('btn', { context: 'redux' })}
          </Button>
        </div>

        <div>
          <p>
            <strong>{t('redux')}</strong>
          </p>
          {data?.map((x, i) => {
            return <p key={i}>{x.name}</p>
          })}
        </div>
      </div>
    </SystemPage>
  )
}

export default Dashboard
