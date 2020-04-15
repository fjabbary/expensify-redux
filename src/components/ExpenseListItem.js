import React from 'react'

export default function ExpenseListItem({ description, amount, createdAt }) {
    return (
        <div className="container">
            <h3><b>Description: </b>{description}</h3>
            <p><b>Amount: </b>{amount}</p> <span>CreatedAt: {createdAt}</span>
        </div>
    )
}
