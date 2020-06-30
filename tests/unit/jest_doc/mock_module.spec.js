jest.mock('@/utils/foo')

// const foo = require('@/utils/foo')
import foo from '@/utils/foo'

foo.mockImplementation(() => 42)
test('aaa', () => {
  const res = foo()
  expect(res).not.toBe(0)
})

import axios from 'axios'
import Users from '@/utils/user'
jest.mock('axios')

test('should fetch users', () => {
  const users = [{ name: 'bob' }]
  const resp = { data: users }
  axios.get.mockResolvedValue(resp)
  return Users.all().then(data => expect(data).toEqual(resp))
})
