// 校验手机号码
/**
 *
 *
 * @export
 * @param { string } phone
 * @returns boolean
 */
export function CheckPhone(phone) {
  return /^1[3-9]\d{9}$/.test(phone)
}

export function AddNumber(a, b) {
  return a + b
}

export function fetchData(bo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (bo) {
        resolve(2)
      } else {
        reject(new Error('error number'))
      }
    }, 100)
  })
}
export function fetchRandom() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let bo = Math.random() > 0.5
      if (bo) {
        resolve(2)
      } else {
        reject(new Error('error number'))
      }
    }, 100)
  })
}
