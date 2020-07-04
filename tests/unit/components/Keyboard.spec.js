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
  it('Down arrow key decrements quantity by 1', () => {
    const wrapper = mount(KeyboardEvent)
    wrapper.vm.quantity = 5
    wrapper.trigger('keydown.down')
    expect(wrapper.vm.quantity).toBe(4)
  })

  it('Escape sets quantity to 0', () => {
    const wrapper = mount(KeyboardEvent)
    wrapper.vm.quantity = 5
    wrapper.trigger('keydown.esc')
    expect(wrapper.vm.quantity).toBe(0)
  })

  it('Magic character "a" sets quantity to 13', () => {
    const wrapper = mount(KeyboardEvent)
    wrapper.trigger('keydown', {
      key: 'a'
    })
    expect(wrapper.vm.quantity).toBe(13)
  })
})
