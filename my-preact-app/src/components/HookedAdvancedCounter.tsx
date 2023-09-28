import { useCounter } from "../hooks/useCounter";

export const HookedAdvancedCounter = () => {
    const { value, increment } = useCounter();
    
    return (
        <div>
            <p>Counter: {value}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
