import { createStore } from 'redux';

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy }

        case 'DECREMENT':
            return { count: state.count - action.decrementBy }

        case 'RESET':
            return { count: 0 }

        default:
            return state;
    }
}

const store = createStore(countReducer)


//Action Generators
const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
}

const resetCount = () => {
    return {
        type: 'RESET'
    }
}

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount())
store.dispatch(decrementCount())
store.dispatch(resetCount())


