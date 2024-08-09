import { defineStore } from 'pinia'
import constant from '@/util/constant'

export const usePageTypeStore = defineStore('pageType', {
  state: () => {
    return { pageType: constant.defaultPageType }
  },
  actions: {
    set(pageType) {
      this.pageType = pageType
    }
  }
})
