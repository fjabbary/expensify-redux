import React from 'react';

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            <p>Edit expnese component id: {props.match.params.id}</p>
        </div>
    )
}

export default EditExpensePage;