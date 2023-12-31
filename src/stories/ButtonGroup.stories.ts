import ButtonGroup from '@/components/ButtonGroup.vue'

import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component: '그룹화된 버튼을 표시하고 active로 활성화된 버튼을 표현하는 컴포넌트\n\nMobile은 항목 내에서 확인가능'
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    buttons: {
      control: 'object',
      description: '버튼 그룹에 표시할 버튼들의 정보를 담은 배열\n\nkey는 버튼을 구분할 수 있는 고유한 key값, text는 버튼에 표시할 텍스트',
    },
    // @ts-ignore
    updateActive: {
      action: 'updateActive',
      description: '변경된 active값을 부모 컴포넌트에 전달하는 이벤트',
      control: 'function',
      table: {
        type: {
          summary: 'defineEmits',
        }
      }
    },
  },
}
export default meta

type Story = StoryObj<typeof ButtonGroup>
export const Primary: Story = {
  render: (args) => {
    return {
      components: { ButtonGroup },
      setup() {
        return { args }
      },
      template: '<ButtonGroup v-bind="args" />',
    }
  },
  args: {
    buttons: [
      { key: 'button1', text: '버튼1' },
      { key: 'button2', text: '버튼2' },
      { key: 'button3', text: '버튼3' },
      { key: 'button4', text: '버튼4' }
    ],
  },
}