export const capitalize = (s?: string) => s && s[0].toUpperCase() + s.slice(1).toLowerCase()

export const throttle = (cb: any, delay: number = 200) => {
  let shouldWait = false
  let waitingArgs: any
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false
    } else {
      cb(...waitingArgs)
      waitingArgs = null
      setTimeout(timeoutFunc, delay)
    }
  }

  return (...args: any) => {
    if (shouldWait) {
      waitingArgs = args
      return
    }

    cb(...args)
    shouldWait = true

    setTimeout(timeoutFunc, delay)
  }
}

export const debounce = (callback: any, timeout: any = 400) => {
  let timer: any
  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback(...args)
    }, timeout)
  }
}
