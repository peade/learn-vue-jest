import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter'
import ChildComp from '@/components/ChildComp'

describe('Counter', () => {
  const wrapper = mount(Counter)
  const button = wrapper.find('button')
  // 正常渲染
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })
  // 存在按钮
  it('has a button', () => {
    expect(button).toBeTruthy()
  })
  // 模拟用户点击
  // eslint-disable-next-line
  it('button click should increment the count', async () => {
    expect(wrapper.vm.count).toBe(0)
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
    // await 事件，和 await nextTick 结果一致
    await button.trigger('click')
    // await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('2')
  })
  // $emit 事件
  it('emit is triggered', () => {
    wrapper.vm.$emit('foo')
    wrapper.vm.$emit('foo', 123)
    // $emit 已触发
    expect(wrapper.emitted().foo).toBeTruthy()
    // 断言事件的数量
    expect(wrapper.emitted().foo.length).toBe(2)
    // 断言事件的有效数据
    expect(wrapper.emitted().foo[1]).toEqual([123])
  })
})

// 子组件触发事件，父组件改变
describe('parent child', () => {
  // disable-eslint-next-line
  it("displays 'Emitted!' when custom event is emitted", async () => {
    const wrapper = mount(Counter)
    wrapper.findComponent(ChildComp).vm.$emit('custom')
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain('Emitted!')
  })
})

// prop  setData  transition
// 传入prop, 设置Data，已经transition 影响
describe('prop data transition', () => {
  it('props data', () => {
    const wrapper = mount(Counter, {
      propsData: {
        user: 'A Great Person'
      }
    })
    expect(wrapper.html()).toContain('A Great Person')
  })
  // disable-eslint-next-line
  it('setData', async () => {
    const wrapper = mount(Counter, {
      propsData: {
        user: 'A Great Person'
      }
    })
    wrapper.setData({
      show: false
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).not.toContain('Foo')
  })
})
