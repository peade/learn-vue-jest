import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import axios from 'axios'
import AxiosGet from '@/components/AxiosGet'

jest.mock('axios')
axios.get.mockResolvedValue({ data: 'value' })
it('fetches async when a button is clicked', async () => {
  const wrapper = shallowMount(AxiosGet)
  const btn = wrapper.find('button')
  btn.trigger('click')
  /**
   * Vue 更新其组件和完成其 Promise 对象的时机不同，如 axios 解析出的那个。
   * 一个易于遵循的规则是在诸如 trigger 或 setProps 的变更时始终使用 await。如果你的代码依赖一些诸如 axios 的异步操作，也要为 flushPromises 加入一await
   *
   */

  await flushPromises()
  expect(wrapper.text()).toBe('value')
})
