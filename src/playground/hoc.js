import React from 'react';
import ReactDOM from 'react-dom';

// const Info = (props) => (
//     <h1>Info component: {props.info}</h1>
// )

// const hoc = (WrappedComponent) => {
//     return (props) => {
//         return (
//             <div>
//                 {props.isAdmin ? <p>it is admin</p> : ''}
//                 <WrappedComponent {...props} />
//             </div>
//         )
//     }
// }

// const Admin = hoc(Info)

const Comp = (props) => {
    return (
        <p>You are logged in </p>
    )
}

const hoc = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} /> : <p>Please login to view the content</p>}
        </div>
    )
}

const Auth = hoc(Comp)

// ReactDOM.render(<Admin info="text props" isAdmin={false} />, document.getElementById('app'))
ReactDOM.render(<Auth isAuth={false} text="Hi" />, document.getElementById('app'))