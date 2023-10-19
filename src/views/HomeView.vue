<script setup lang="ts">
import { uiStore } from '@/stores/ui'
import ButtonGroup from '@/components/ButtonGroup.vue'

const store = uiStore()

const buttons = [
  { key: 'button1', text: '버튼1' },
  { key: 'button2', text: '버튼2' },
  { key: 'button3', text: '버튼3' },
  { key: 'button4', text: '버튼4' }
]

function updateActive(key: string) {
  // updateActive가 전달되면 store에 ui 업데이트
  store.setUi(key)
}
</script>
<template>
  <div>
    <h1>Home</h1>
    <h2>{{ store.ui }}</h2>
    <ButtonGroup :buttons="buttons" @updateActive="updateActive" />
  </div>
</template>
