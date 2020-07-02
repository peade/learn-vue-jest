// const { getChangedFilesForRoots } = require('jest-changed-files')

// 打印出当前目录最后修改过的一组文件
// getChangedFilesForRoots(['./'], {
//   lastCommit: true
// }).then(result => console.log(result.changedFiles))

const diff = require('jest-diff')

const a = { a: { b: { c: 5 } } }
const b = { a: { b: { c: 6 } } }
diff(a, b)
// const result = diff(a, b)

// print diff
// console.log(result)

// const { parseWithComments } = require('jest-docblock')

// const code = `
// /**
//  * This is a sample
//  *
//  * @flow
//  */

//  console.log('Hello World!');
// `

// const parsed = parseWithComments(code)

// prints an object with two attributes: comments and pragmas.
// console.log(parsed)

const { validate } = require('jest-validate')

const configByUser = {
  transform: '<rootDir>/node_modules/my-custom-transform'
}

validate(configByUser, {
  comment: '  Documentation: http://custom-docs.com',
  exampleConfig: { transform: '<rootDir>/node_modules/babel-jest' }
})

// console.log(resultVali)

// const prettyFormat = require('pretty-format')

const val = { object: {} }
val.circularReference = val
val[Symbol('foo')] = 'foo'
val.map = new Map([['prop', 'value']])
val.array = [-0, Infinity, NaN]

// console.log(prettyFormat(val))

test('must be one', () => {
  expect(1).toBe(1)
})
