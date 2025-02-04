import { Component } from "react";

class ClassCardUi extends Component {
    render() {
        return(
            <>
            <div className="card shadow border-0">
            <img src={this.props.image ?? "images/logo192.png"} alt="" height={600}/>
            <div className="card-body"> 
                <h1>{this.props.title ?? "dummy title"}</h1>
                <p>{this.props.paragraph ?? "dummy paragraph"}</p>
            </div>
        </div>
            </>
        )
    }
}

export default ClassCardUi