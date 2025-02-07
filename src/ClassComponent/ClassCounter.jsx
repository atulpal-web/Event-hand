import { Component } from "react";
import Counter from "../hook/Counter";

class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,   
            name: ""
        };
    }

    inc = () => {
        this.setState({
            count: this.state.count + 1, 
            name: "Increment"
        });
    }

    dec = () => {
        const counter = this.state.count;  
        this.setState({
            count: counter > 0 ? counter - 1 : counter,
            name: "Decrement"
        });
    }

    render() {
        return (
            <>
                <div className="col-lg-6 mx-auto my-5 p-5 shadow text-center bg-danger">
                    <h1>Function Counter</h1>
                    <h1>{this.state.count}</h1>  
                    <h3>{this.state.name}</h3>   
                  
                    <button onClick={this.inc} className="btn btn-outline-success ">👆</button>
                    <button onClick={this.dec} className="btn btn-outline-primary mx-3 ">👇</button>
                </div>
            </>
        );
    }
}

export default ClassCounter;
