import mutation from '@/store/mutations'
import getters from '@/store/getters'

// test mutation
describe('mutation', () => {
  it('increment count by 1', () => {
    const state = {
      count: 0
    }
    mutation.increment(state)
    expect(state.count).toBe(1)
  })
})

// test getters
describe('getters', () => {
  it('evenOrOdd 2 is even', () => {
    const state = {
      count: 2
    }
    expect(getters.evenOrOdd(state)).toBe('even')
  })
  it('evenOrOdd 1 is odd', () => {
    const state = {
      count: 1
    }
    expect(getters.evenOrOdd(state)).toBe('odd')
  })
})

// test full store
