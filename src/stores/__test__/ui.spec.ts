import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

import { uiStore } from '@/stores/ui'

describe('uiStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('ui의 값을 변경', () => {
    const store = uiStore()
    store.setUi('fooo')
    expect(store.ui).toBe('fooo')
  })
})
