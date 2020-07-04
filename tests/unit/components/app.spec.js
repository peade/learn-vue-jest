import { mount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import About from '@/views/About'
import Home from '@/views/Home.vue'
import { routes } from '@/router/index'
import flushPromises from 'flush-promises'
const localVue = createLocalVue()
localVue.use(VueRouter)
describe('App', () => {
  it('render a child component via routing', async () => {
    const router = new VueRouter({ routes })
    const wrapper = mount(App, { localVue, router })
    // router.push({ path: '/' })
    await wrapper.vm.$nextTick()
    expect(wrapper.findComponent(Home).exists()).toBe(true)
    router.push({ path: '/about' })
    // 懒加载路由，需要完成所有promises
    await flushPromises()
    expect(wrapper.findComponent(About).exists()).toBe(true)
  })
})
