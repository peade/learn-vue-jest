export function timerGame(callback) {
  console.log('Ready ... go!')
  setTimeout(() => {
    console.log("Time's up -- stop!")
    callback && callback()
  }, 1000)
}

export function infiniteTimerGame(callback) {
  console.log('infinite timer Ready...go!')
  setTimeout(() => {
    callback && callback()
    // 10s后执行
    setTimeout(() => {
      infiniteTimerGame(callback)
    }, 10000)
  }, 1000)
}
