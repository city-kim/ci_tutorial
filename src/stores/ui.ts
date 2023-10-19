import { ref } from 'vue'
import { defineStore } from 'pinia'

export const uiStore = defineStore('ui', () => {
  const ui = ref('')

  function setUi(value: string) {
    // value가 전달되면 ui의 값을 value로 변경
    ui.value = value
  }

  return {
    ui,
    setUi
  }
})
