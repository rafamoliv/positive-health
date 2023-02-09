import { componentsEn, componentsPtBr } from '@/components'
import { pagesEn, pagesPtBr } from '@/pages'
import { storeEn, storePtBr } from '@/store'

import { globalPtBr, globalEn } from './globals'

import { templatesEn, templatesPtBr } from '@/templates/locales'

export const defaultLocales = ['en', 'ptbr']

const locales = {
  en: {
    ...globalEn,
    ...pagesEn,
    ...componentsEn,
    ...storeEn,
    ...templatesEn
  },
  ptbr: {
    ...globalPtBr,
    ...pagesPtBr,
    ...componentsPtBr,
    ...storePtBr,
    ...templatesPtBr
  }
}

export default locales
