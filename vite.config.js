import { resolve as pathResolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    plugins: [react({})],
    envPrefix: 'REACT_',
    resolve: {
      alias: {
        '@': pathResolve('./src'),
        '~bootstrap': pathResolve(__dirname, 'node_modules/bootstrap')
      }
    }
  }
})
