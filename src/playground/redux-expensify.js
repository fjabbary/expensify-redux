import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

const expensesDefaultState = []
const expensesReducer = (state = expensesDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.expenseId)

        case 'EDIT_EXPENSE':
            return state.map((item) => {
                if (item.id === action.expenseId) {
                    return {
                        ...item,
                        ...action.updates
                    }
                } else {
                    return item
                }
            })

        default:
            return state
    }
}

const filterDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filterDefaultState, action) => {
    switch (action.type) {
        case 'FILTER_BY_TEXT':
            return {
                ...state,
                text: action.text
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}))


//================= Action generator ====================
const addExpense = ({ description, note, amount, createdAt } = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        expenseId: id
    }
}

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        expenseId: id,
        updates
    }
}

const setTextFilter = (text = '') => {
    return {
        type: 'FILTER_BY_TEXT',
        text
    }
}

const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}

const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}

const setStartDate = (startDate = undefined) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}

const setEndDate = (endDate = undefined) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}

store.subscribe(() => {
    console.log(store.getState())
})

// const expenseOne = store.dispatch(addExpense({ description: 'Rent for January', note: 'rent note', amount: 75000, createdAt: Date.now() }))
// const expenseTwo = store.dispatch(addExpense({ description: 'bill for March', note: 'bill note', amount: 45000, createdAt: Date.now() }))

// // store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { description: 'Edited expense' }))
// store.dispatch(setTextFilter('new text'))

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
store.dispatch(setEndDate(1250))














// const demoState = {
//     expenses: [
//         {
//             id: 'asfgbesed',
//             decription: 'This is expense one',
//             note: 'This is note',
//             amount: 1000,
//             createdAt: 0
//         }
//     ],

//     filters: {
//         text: 'filter text',
//         sortBy: 'amount',  //amount or date
//         startDate: undefined,
//         endDate: undefined
//     }
// }
