import React, {Component} from 'react'

class HelloClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            batchNo: 10,
            country: 'India',
        }
    }

    changeBatchNo = () => {
        this.setState({
        batchNo : 9
        })
        
        
    }
    changeCountry = () => {
        this.setState({
            country: 'US'
        })
    }
    render() {
        const {student1, student2} = this.props
        return (
            <>
                <h1>Hello {student1} {student2 && `and ${student2}`}</h1>
                <h2>Current Batch: {this.state.batchNo}</h2>
                <h2>Country: {this.state.country}</h2>
                <button onClick={this.changeBatchNo}>Click here to change batch</button>
                <button onClick={this.changeCountry}>Click here to change country</button>
            </>
        )
    }
}

export default HelloClass