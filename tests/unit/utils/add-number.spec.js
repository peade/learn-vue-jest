import { AddNumber } from '@/utils/tools'

// toBe
describe('add number 2+2', () => {
  it('case 2+2', () => {
    expect(AddNumber(2, 2)).toBe(4)
  })
})
