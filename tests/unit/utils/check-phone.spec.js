import { CheckPhone } from '@/utils/tools'

describe('13512344321 is true', () => {
  it('check phoneNumber when passed', () => {
    expect(CheckPhone('13512344321')).toBe(true)
  })
})

describe('1231 is false', () => {
  it('check phoneNumber when passed', () => {
    expect(CheckPhone('1231')).toBe(false)
  })
})

describe('135123443213 is false', () => {
  it('check phoneNumber when passed', () => {
    expect(CheckPhone('135123443213')).toBe(false)
  })
})
describe('135123a4321 is true', () => {
  it('check phoneNumber when passed', () => {
    expect(CheckPhone('135123a4321')).toBe(false)
  })
})
