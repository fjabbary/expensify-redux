import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

const expensesDefaultState = []
const expensesReducer = (state = expensesDefaultState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

const filtersDefaultReducer = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersDefaultReducer, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}))

console.log(store.getState())



const demoState = {
    expenses: [
        {
            id: 'asfgbesed',
            decription: 'This is expense one',
            note: 'This is note',
            amount: 1000,
            createdAt: 0
        }
    ],

    filters: {
        text: 'filter text',
        sortBy: 'amount',  //amount or date
        startDate: undefined,
        endDate: undefined
    }
}