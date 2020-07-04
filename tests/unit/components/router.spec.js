// 此处测试代码不正确，没有实现测试效果
import { shallowMount } from '@vue/test-utils'
import About from '@/views/About'

describe('vue-router jest', () => {
  it('params id should be 1111, query name should be aaa', async () => {
    const $route = {
      path: '/about',
      hash: '',
      params: { id: '1111' },
      query: { name: 'aaaa' }
    }
    const wrapper = shallowMount(About, {
      mocks: {
        $route
      }
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$route.fullPath).not.toBe('/')
  })
})
