let cityList = []

function initCity() {
  cityList = cityList.concat(['Vienna', 'San Juan', 'Liu Fu', 'An Tong'])
}
function clearCity() {
  cityList = []
}

function isCity(name) {
  return cityList.includes(name)
}
// 单次设置
// beforeEach(() => {
//   initCity()
//   // return initCity() // 如果是异步代码
// })
// afterEach(() => {
//   clearCity()
//   // return clearCity() // 如果是异步代码
// })

// test('city  has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy()
// })
// test('city has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy()

// 一次性设置
beforeAll(() => {
  initCity()
  // return initCity() // 如果是异步代码
})
afterAll(() => {
  clearCity()
  // return clearCity() // 如果是异步代码
})

test('city  has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy()
})
test('city has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy()
})

/**
 * 可以通过 describe 块来将测试分组。
 * 当 before 和 after 的块在 describe 块内部时，
 * 则其只适用于该 describe 块内的测试。
 */

describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  let food = []
  function initFood() {
    food = ['a', 'b']
  }
  beforeEach(() => {
    initFood()
  })
  test('food a ', () => {
    expect(food.includes('a')).toBe(true)
  })
  test('food b', () => {
    expect(food.includes('b')).toBe(true)
  })
})
