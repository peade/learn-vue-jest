import YesNo from '@/components/YesNo'
import { mount } from '@vue/test-utils'
// import sinon from 'sinon'

describe('click event', () => {
  // eslint-disable-next-line
  it('Click on yes button calls our method with argument "yes"', async () => {
    // const spy = sinon.spy()
    const fn = jest.fn(val => {
      return val
    })
    const wrapper = mount(YesNo, {
      propsData: {
        callMe: fn
      }
    })
    const btn = wrapper.find('button.yes')
    await btn.trigger('click')
    expect(fn.mock.calls.length).toBe(1)
    expect(fn.mock.calls[0][0]).toBe('yes')
  })
})
