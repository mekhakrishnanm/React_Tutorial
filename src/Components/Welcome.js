import React, {Component} from 'react'

class Welcome extends Component {
    
    render() {
        const { name, lName, children } = this.props
        return (
            <div>
            <h4> Hey {name} - {lName}</h4> 
            <code>{children}</code>
            </div>)
    }
}
export default Welcome