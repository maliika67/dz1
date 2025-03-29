import './App.css';

import { Provider } from 'react-redux';
import { store } from './state-management/redux/store';
import { Counter } from './state-management/redux/Counter';
import { CounterZ } from './state-management/zustand/CounterZ';


export default function App() {
    return (
        <>
            <CounterZ />
            <Provider store={store}>
                <Counter />
            </Provider>
        </>
    );
}


