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
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './vitest.setup.js',
      coverage: {
        provide: 'c8',
        exclude: [
          'vitest.setup.ts',
          '**/*.test.{ts,tsx}',
          '**/*.stories.tsx',
          '**/*.config.ts',
          'src/assets/**/*',
          'src/store/**/*',
          'src/utils/*',
          'src/styles/*',
          'src/components/**/index.ts',
          'src/services/api.ts'
        ]
      }
    }
  }
})
