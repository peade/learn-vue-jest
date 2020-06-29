jest.mock('@/utils/foo')

// const foo = require('@/utils/foo')
import foo from '@/utils/foo'

foo.mockImplementation(() => 42)
test('aaa', () => {
  const res = foo()
  expect(res).not.toBe(0)
})
