// import { createStore, combineReducers } from 'redux';
// import uuid from 'uuid'

//Action Generators
// const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
//     return {
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: uuid(),
//             description,
//             note,
//             amount,
//             createdAt
//         }
//     }
// }

// const removeExpense = ({ id } = {}) => {
//     return {
//         type: 'REMOVE_EXPENSE',
//         id
//     }
// }

// const editExpense = (id, updates) => {
//     return {
//         type: 'EDIT_EXPENSE',
//         id,
//         updates
//     }
// }

// const setTextFilter = (text) => {
//     return {
//         type: 'SET_TEXT_FILTER',
//         text
//     }
// }

// const sortByDate = () => {
//     return {
//         type: 'SORT_BY_DATE'
//     }
// }

// const sortByAmount = () => {
//     return {
//         type: 'SORT_BY_AMOUNT'
//     }
// }

// const setStartDate = (startDate) => {
//     return {
//         type: 'SET_START_DATE',
//         startDate
//     }
// }

// const setEndDate = (endDate) => {
//     return {
//         type: 'SET_END_DATE',
//         endDate
//     }
// }
// ========== Reducers =============
// const expensesDefaultState = [];
// const expensesReducer = (state = expensesDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             return [...state, action.expense]

//         case 'REMOVE_EXPENSE':
//             return state.filter(item => item.id !== action.id)

//         case 'EDIT_EXPENSE':
//             return state.map((item) => {
//                 if (item.id === action.id) {
//                     return {
//                         ...item,
//                         ...action.updates
//                     }
//                 } else {
//                     return item
//                 }
//             })

//         default:
//             return state;
//     }
// }

// const filterDefaultState = {
//     text: '',
//     sortBy: 'amount',  //amount or date
//     startDate: undefined,
//     endDate: undefined
// }
// const filtersReducer = (state = filterDefaultState, action) => {
//     switch (action.type) {
//         case 'SET_TEXT_FILTER':
//             return {
//                 ...state,
//                 text: action.text
//             }

//         case 'SORT_BY_DATE':
//             return {
//                 ...state,
//                 sortBy: 'date'
//             }
//         case 'SORT_BY_AMOUNT':
//             return {
//                 ...state,
//                 sortBy: 'amount'
//             }

//         case 'SET_START_DATE':
//             return {
//                 ...state,
//                 startDate: action.startDate
//             }
//         case 'SET_END_DATE':
//             return {
//                 ...state,
//                 endDate: action.endDate
//             }
//         default:
//             return state;
//     }
// }

// const store = createStore(combineReducers({
//     expenses: expensesReducer,
//     filters: filtersReducer
// }))

// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//     const filteredArr = expenses.filter((item) => {
//         const startDateMatch = item.createdAt >= startDate;
//         const endDateMatch = item.createdAt <= endDate;
//         const textMatch = item.description.toLowerCase().includes(text.toLowerCase())

//         return startDateMatch && endDateMatch && textMatch;
//     })

//     return filteredArr.sort((a, b) => {
//         if (sortBy === 'date') {
//             return a.createdAt < b.createdAt ? 1 : -1
//         }

//         else if (sortBy === 'amount') {
//             return a.amount < b.amount ? 1 : -1
//         }
//     })
// }


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})


// ACTIONS
const expenseOne = store.dispatch(addExpense({ description: 'Rent for this month of May', note: 'note for May', amount: 950, createdAt: -2000 }))

const expenseTwo = store.dispatch(addExpense({ description: 'Car insurance', note: 'insruance', amount: 250, createdAt: -1000 }))
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 1500 }))

// store.dispatch(setTextFilter('car'))
// store.dispatch(sortByDate())
store.dispatch(sortByAmount())

store.dispatch(setStartDate(-9000))
store.dispatch(setEndDate(3000))













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


