import { useCallback, useRef } from 'react'

export default function useThrottle<T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number
) {
  const isEnable = useRef(true)

  return useCallback(
    (...args: T) => {
      if (isEnable.current) {
        callback(...args)

        isEnable.current = false

        setTimeout(() => {
          isEnable.current = true
        }, delay)
      }
    },
    [delay, callback]
  )
}
