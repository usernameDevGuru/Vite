import { useCallback, useState } from "preact/hooks"

export const useCounter = () => {
    const [value, setValue] = useState(0)
    const increment = useCallback(() => {
        setValue(value + 1)
    }, [value])

    return { value, increment }
}
