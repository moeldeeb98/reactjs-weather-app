import React from 'react'

const Weather = (props) =>{
    const {data} = props
    return (
        <div className="container text-light">
            <div className="cards pt-4">
                {/* show city name */}
                {
                    (data.city && data.country) ? (
                        <h1>{data.city}, {data.country}</h1>
                    ):null
                }
                {/* show weather icon */}
                {
                    (data.icon)? (
                        <h5 className="py-4">
                            <i className={`wi ${data.icon} display-1`}></i>
                        </h5>
                    ):null
                }
                {/* show temp degree in celeusis */}
                {
                    (data.temp)? (
                        <h1 className="py-2">{data.temp}&deg;</h1>
                    ):null
                }
                {/* show max and min temp */}
                {minMaxTemp(data.temp_min, data.temp_max)}

                {/* show the weather description */}
                {
                    (data.desc)?(
                        <h4 className="py-3">{data.desc}</h4>
                    ):null
                }
            </div>
        </div>
    )
}

const minMaxTemp = (min, max) => {
    return (min && max) ? (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    ): null
    
}

export default Weather