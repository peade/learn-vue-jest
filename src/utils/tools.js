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

/**
 *
 *
 * @export
 * @param { number } a
 * @param { number } b
 * @returns number
 */
export function AddNumber(a, b) {
  return a + b
}
