// 校验手机号码
export function CheckPhone(phone) {
  return /^1[3-9]\d{9}$/.test(phone);
}
