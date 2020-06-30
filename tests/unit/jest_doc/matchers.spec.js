// toBe
describe('toBe', () => {
  it('case 2+2', () => {
    expect(2 + 2).toBe(4)
  })
})
// not.toBe
test('adding positive number is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    }
  }
})
// toEqual
describe('toEqual', () => {
  it('object.assign', () => {
    const data = { one: 1 }
    data['two'] = 2
    expect(data).toEqual({ one: 1, two: 2 })
  })
})

// Truthiness
/**
 * toBeNull 只匹配 null
 * toBeUndefined 只匹配 undefined
 * toBeDefined 与 toBeUndefined相反
 * toBeTruthy 匹配任何if语句为真
 * toBeFalsy 匹配任何if语句为false
 *
 */
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

// 数字
/**
 * toBeGreaterThan
 * toBeGreaterThanOrEqual
 * toBeLessThan
 * toBeLessThanOrEqual
 * toBeCloseTo 比较浮点数相等，浮点数有误差
 */
test('2+2', () => {
  const value = 2 + 2
  const floatNum = 0.1 + 0.2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)

  // float number
  expect(floatNum).not.toBe(0.3)
  expect(floatNum).toBeCloseTo(0.3)
})

// Array and iterables
// toContain 检查一个数组或可迭代对象是否包含某个特定项
test('the shopping list has beer on it', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer'
  ]
  expect(shoppingList).toContain('beer')
  expect(new Set(shoppingList)).toContain('beer')
})

// exception 例外
// 测定特定函数抛出错误，toThrow
test('compiling android goes as expected', () => {
  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK')
  }

  expect(compileAndroidCode).toThrow()
  expect(compileAndroidCode).toThrow(Error)
  // 还可以明确 错误信息 或 一个正则
  expect(compileAndroidCode).toThrow('you are using the wrong JDK')
  expect(compileAndroidCode).toThrow(/JDK/)
})
