import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VuexComp from '@/components/VuexComp'
import { storeConfig } from '@/store'
import { cloneDeep } from 'lodash'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('vuex test', () => {
  let actions
  let getters
  let store

  beforeEach(() => {
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn()
    }
    getters = {
      clicks: () => 2,
      inputValue: () => 'input'
    }
    store = new Vuex.Store({
      state: {},
      actions,
      getters
    })
  })
  // Actions 相关测试
  it('dispatches "actionInput" when input event value is "input"', () => {
    const wrapper = shallowMount(VuexComp, { store, localVue })
    const input = wrapper.find('input')
    input.element.value = 'input'
    input.trigger('input')
    expect(actions.actionInput).toHaveBeenCalled()
  })

  it('does not dispatch "actionInput" when event value is not "input"', () => {
    const wrapper = shallowMount(VuexComp, { store, localVue })
    const input = wrapper.find('input')
    input.element.value = 'not input'
    input.trigger('input')
    expect(actions.actionInput).not.toHaveBeenCalled()
  })

  it('calls store action "actionClick" when button is clicked', () => {
    const wrapper = shallowMount(VuexComp, { store, localVue })
    wrapper.find('button').trigger('click')
    expect(actions.actionClick).toHaveBeenCalled()
  })
  // Getters 相关测试
  it('Renders store.getters.inputValue in frist p tag', () => {
    const wrapper = shallowMount(VuexComp, { store, localVue })
    const p = wrapper.find('p')
    expect(p.text()).toBe(getters.inputValue())
  })
  it('Renders "store.getters.clicks" in second p tag', () => {
    const wrapper = shallowMount(VuexComp, { store, localVue })
    const p = wrapper.findAll('p').at(1)
    expect(p.text()).toBe(getters.clicks().toString())
  })
})

// store 内部功能测试
describe('store test', () => {
  it('increment', () => {
    const store = new Vuex.Store(cloneDeep(storeConfig))
    expect(store.state.count).toBe(0)
    store.commit('increment')
    expect(store.state.count).toBe(1)
  })
  test('updates "evenOrOdd" getter when "increment" is committed', () => {
    const store = new Vuex.Store(cloneDeep(storeConfig))
    expect(store.getters.evenOrOdd).toBe('even')
    store.commit('increment')
    expect(store.getters.evenOrOdd).toBe('odd')
  })
})
