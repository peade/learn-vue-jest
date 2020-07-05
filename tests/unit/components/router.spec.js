// simple mock routes
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
    expect(wrapper.vm.$route.path).toBe('/about')
  })
})
