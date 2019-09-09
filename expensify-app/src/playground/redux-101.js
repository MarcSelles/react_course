import { createStore } from 'redux';

// Action Generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => (
    {
        type: 'INCREMENT',
        incrementBy
    }
);

const decrementCount = ({ decrementBy = 1 } = {}) => (
    {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
);
const setCount = ({ count } = {}) => (
    {
        type: 'SET',
        count
    }
);
const resetCount = () => (
    {
        type: 'RESET',
    }
);

// Reducers
// 1. Reducers are pure functions: 
//    Output determined (only) by Input. Also no interact with things outside function.
// 2. Never change state or action (just return object)

const countReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    };
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// increment count
store.dispatch(incrementCount({incrementBy: 5}));

// Decrement count
store.dispatch(decrementCount({ decrementBy: 100 }));
store.dispatch(decrementCount());

// Reset count
store.dispatch(resetCount());

// Set count
store.dispatch(setCount({count: 101}));


