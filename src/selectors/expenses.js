
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((item) => {
        const startDateMatch = item.createdAt >= startDate;
        const endDateMatch = item.createdAt <= endDate;
        const textMatch = item.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }

        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

export default getVisibleExpenses;