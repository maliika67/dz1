import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/store';

export function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return (
        <div>
            <p>Redux Toolkit: {count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}
