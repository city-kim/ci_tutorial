<script lang="ts" setup>
import { ref } from 'vue'
import type { PropType } from 'vue'

defineProps({
  buttons: {
    type: Array as PropType<Array<{ key: string; text: string }>>,
    required: true
  }
})

const emit = defineEmits<{
  // emit의 형태를 지정해줘야 한다
  (e: 'updateActive', key: string): void
}>()

const selected = ref('') // 선택된 버튼의 key

function updateActive(key: string | undefined) {
  // button 클릭시 active 업데이트
  if (key) selected.value = key
  emit('updateActive', selected.value)
}
</script>

<template>
  <div class="button-group-container">
    <div class="button-group">
      <button
        v-for="(item, index) in buttons"
        :key="index"
        :class="{ active: item.key === selected }"
        @click="updateActive(item.key)"
      >
        {{ item.text }}
      </button>
    </div>
  </div>
</template>
<style>
.button-group {
  display: flex;
}
.button-group button {
  border: 0;
  padding: 0.25rem 0.5rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  transition: background-color 0.1s;
  cursor: pointer;
}
.button-group button.active {
  color: blue;
}
.button-group button:hover {
  background-color: rgb(240, 240, 240);
}
.button-group button + button {
  border-left: 1px solid #ccc;
}
.button-group button:first-child {
  border-left: 1px solid #ccc;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.button-group button:last-child {
  border-right: 1px solid #ccc;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>
