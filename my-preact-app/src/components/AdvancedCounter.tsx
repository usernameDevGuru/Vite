import { useCallback, useState } from "preact/hooks"

export const AdvancedCounter = () => {
    const [value, setValue] = useState(0)
    const increment = useCallback(() => {
        setValue(value + 1)
    }, [value])

    return (
        <div>
            <p>Counter: {value}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
