import { useCounterStore } from './store';

export function CounterZ() {
    const { count, increment, decrement } = useCounterStore();

    return (
        <div>
            <p>Zustand: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}
