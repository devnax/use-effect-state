import { useEffect, useState } from "react"

const useEffectState = (callback: () => any | Promise<() => any>, deps?: any[]) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [d, setD] = useState()
  useEffect(() => {
    const _cb = async () => {
      const _d = await callback()
      _d && setD(_d)
    }
    _cb()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps || [])
  return d
}

export default useEffectState
