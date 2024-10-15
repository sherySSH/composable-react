import { useState } from 'react'
import './App.css'

function App() {

    const [numCols] = useState(7)
    const [numRows] = useState(5)
    const [lastRowNumCols] = useState(3)

    const [cols] = useState([...Array(numCols).keys()])
    const [rows] = useState([...Array(numRows-1).keys()])
    const [lastRowCols] = useState([...Array(lastRowNumCols).keys()])

    return (
        <>
        <div className='input-box-checkbox'>
            <p>Days:</p>
            {
              rows.map((rowNumber) => {
                return (
                  <div className='input-box-row' id={'row-'+rowNumber} key={''}>
                  {
                      cols.map((colNumber) => {
                        return (
                          <div className='input-checkbox-div' id={'col-'+colNumber} key={''}>
                          <label className='input-checkbox-label'>{((numCols*rowNumber + colNumber + 1) > 9) ? (numCols*rowNumber + colNumber + 1) : '0' + (numCols*rowNumber + colNumber + 1)}</label><input type='checkbox' className='input-checkbox-field'></input>
                          </div>
                        )
                      })
                  }
                  </div>
                )
              })
            }
            <div className='input-box-row' id={'row-'+numRows} key={''}>
            {
              lastRowCols.map((colNumber) => {
                return (
                  <div className='input-checkbox-div' id={'col-'+colNumber} key={''}>
                  <label className='input-checkbox-label'>{((numCols*(numRows-1) + colNumber + 1) > 9) ? (numCols*(numRows-1) + colNumber + 1) : '0' + (numCols*(numRows-1) + colNumber + 1)}</label><input type='checkbox' className='input-checkbox-field'></input>
                  </div>
                )
              })
            }
            </div>

        </div>
        </>
    )
}

export default App