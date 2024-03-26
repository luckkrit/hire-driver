import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { debounce } from "lodash"
import { useEffect, useMemo, useRef } from "react"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export const useDebounce = <T extends unknown[], S>(callback: (...args: T) => S, delay: number = 1000) => {
    const ref = useRef(callback)

    useEffect(() => {
        ref.current = callback
    }, [callback])

    const debouncedCallback = useMemo(() => {
        // pass arguments to callback function
        const func = (...arg: T) => {
            return ref.current(...arg)
        }

        return debounce(func, delay)
        // or just debounce(ref.current, delay)
    }, [delay])

    return debouncedCallback
}