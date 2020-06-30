/**
 * async 函数测试 异步代码单元测试
 *
 */
import { fetchData, fetchRandom } from '@/utils/tools'

// Promise 方式 单元测试写法
// 方式一 then
test('data fetch resolve', () => {
  return fetchData(true).then(data => {
    expect(data).toBeGreaterThanOrEqual(1)
  })
})
test('data fetch reject', () => {
  return fetchData(false).catch(e => {
    expect(e.message).toMatch(/number/)
  })
})
// 方式二 .resolves  .rejects
// resolves
test('data fetch resolve', () => {
  return expect(fetchData(true)).resolves.toBeGreaterThanOrEqual(1)
})
// rejects
test('data fetch reject', () => {
  return expect(fetchData(false)).rejects.toThrow(/number/)
})
// 方式三 Async/Await
test('fetch random async await way', async () => {
  /**
   * expect.assertions(number) is not required but recommended
   * to verify that a certain number of assertions are called during a test.
   * It is otherwise easy to forget to return/await the .resolves assertions.
   */
  expect.assertions(1)
  try {
    const data = await fetchRandom()
    expect(data).toBeGreaterThanOrEqual(1)
  } catch (e) {
    expect(e.message).toMatch(/number/)
  }
})
