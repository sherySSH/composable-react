import { useState } from 'react'
import './App.css'

function App() {
    
    const [days] = useState(["Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                            "Sunday"
    ])

    return (
        <>
        
        <div className='input-vertical-checkbox'>
        <p>Tick Boxes:</p>
        {
            days.map( (value, index) => {
                return (
                    <div key={index} className='input-checkbox-div'>
                        <label id={'label-'+index}>{value}</label><input type='checkbox' id={'input-checkbox-'+value} className='input-checkbox-field '></input>
                    </div>
                )
            })
        }
        </div>
        </>
    )
}

export default App