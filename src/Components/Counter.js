import React, {Component} from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    async increment() {
        // await this.setState({
        //     count: this.state.count+1
        // })

        await this.setState(last => ({
            count: last.count+1
        }))
        console.log("TCL: Counter -> increment -> this.state.count", this.state.count)
    }
    async incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        console.log("TCL: Counter -> increment -> this.state.count", this.state.count)
    }
    render() {
        return (
            <div>
            <h2>Count - {this.state.count}</h2> 
            <button onClick = {() => this.incrementFive()}>Increment</button>
            </div>)
    }
}
export default Counter