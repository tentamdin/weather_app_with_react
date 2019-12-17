import React, { Component } from 'react'
import "./form.css"
class Form extends Component {
    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.loadweather}>
                    <div>{this.props.error ? error() : ""}</div>
                    <div className="row">
                        <div className="col-md-3 col-8 offset-md-1">
                            <input id="city" type="text" className="form-control" name="city" placeholder="city" autoComplete="off" />
                        </div>
                        <div className="col-md-3 col-8">
                            <input id="country" type="text" className="form-control" name="country" placeholder="country" autoComplete="off" />
                        </div>
                        <div className="col-md-3 py-1" style={{ display: "flex", justifyContent: "center" }}>
                            <button className="btn btn-warning">Get Weather</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
function error() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please enter city and country!
        </div>
    )
}


export default Form
