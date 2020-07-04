import KeyboardEvent from '@/components/KeyboardEvent'
import { mount } from '@vue/test-utils'

describe('Key event tests', () => {
  it('Quantity is zero by default', () => {
    const wrapper = mount(KeyboardEvent)
    expect(wrapper.vm.quantity).toBe(0)
  })
  it('Up arrow key increments quantity by 1', async () => {
    const wrapper = mount(KeyboardEvent)
    await wrapper.trigger('keydown.up')
    expect(wrapper.vm.quantity).toBe(1)
  })
})
