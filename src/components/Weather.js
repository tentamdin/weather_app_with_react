import React, { Component } from 'react'


class Weather extends Component {

    render() {
        return (
            <div className="container text-center text-light" style={{ marginTop: "5rem" }}>
                <div className="cards">
                    <h1>{this.props.city}</h1>
                    <h5 className="py-4">
                        <i className={`wi ${this.props.weatherIcon} display-1 `}></i>
                    </h5>

                    {/* Getting temperature */}
                    {this.props.temperature ? (
                        <h1 className="py-2">{this.props.temperature}&deg;</h1>) : null}


                    {/* show max and min temperature */}
                    {minmaxTemp(this.props.temp_min, this.props.temp_max)}

                    {/* Weather description */}
                    <h4 className="py-3">{this.props.description}</h4>
                </div>
            </div >
        )
    }
}

function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        )
    }
}

export default Weather;
