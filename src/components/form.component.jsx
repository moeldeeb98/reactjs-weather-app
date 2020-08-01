import React from 'react'
import './form.style.css'

const Form = (props) => {
    const {loadWeather, error} = props
    return(
        <div className="container">
            <div>{ error ? renderError() : null }</div>
            <form onSubmit={loadWeather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input className="form-control" 
                            type="text" 
                            name="city"
                            autoComplete="off"
                            placeholder="City"
                        />
                    </div>
                    <div className="col-md-3">
                        <input className="form-control" 
                            type="text"
                            name="country"
                            autoComplete="off"
                            placeholder="Country" 
                        />
                    </div>
                    <div className="col-md-3 mt-md-0 py-2 text-md-left">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const renderError = () => {
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and Country
        </div>
    )
}

export default Form