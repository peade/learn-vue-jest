/**
 * Mock 函数允许你测试代码之间的连接——实现方式包括：
 * 擦除函数的实际实现、
 * 捕获对函数的调用 ( 以及在这些调用中传递的参数) 、
 * 在使用 new 实例化时捕获构造函数的实例、
 * 允许测试时配置返回值。
 */

// 方式一：使用mock函数
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}

test('mock fn way', () => {
  const mockCallback = jest.fn(x => 42 + x)
  forEach([0, 1], mockCallback)

  // mock函数调用次数
  expect(mockCallback.mock.calls.length).toBe(2)
  // 第一次调用第一个参数
  expect(mockCallback.mock.calls[0][0]).toBe(0)
  // 第二次调用第一个参数
  expect(mockCallback.mock.calls[1][0]).toBe(1)
  // 第一次调用的返回值
  expect(mockCallback.mock.results[0].value).toBe(42)
})

// 所有的 mock 函数都有这个特殊的 .mock属性，它保存了关于此函数如何被调用、调用时的返回值的信息。

// Mock返回值
const mockReturn = jest.fn()
console.log(mockReturn())
mockReturn
  .mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValueOnce(true)

console.log(mockReturn(), mockReturn(), mockReturn(), mockReturn())
