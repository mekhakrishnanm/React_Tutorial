import React from 'react'
//Functional Component
const Greet = props => {
    const { name, lName, children } = props
    console.log(props)
    return (
        <div>
        <h4> Hey {name} - {lName}</h4> 
        <code>{children}</code>
        </div>)
}

export default Greet