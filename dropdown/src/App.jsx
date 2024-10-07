import './App.css'

function App() {
  
  const onDropdownBtnClick = (e) => {
    console.log(e.currentTarget.nextElementSibling.style.display)
    if (e.currentTarget.nextElementSibling.style.display == '')
      e.currentTarget.nextElementSibling.style.display = 'flex'
    else
      e.currentTarget.nextElementSibling.style.display = ''
  }

  const onCheckboxSelect = (e) => {
    const btn = document.getElementById(e.currentTarget.name)
    const span = btn.children[0]
    if(e.currentTarget.checked) {
      if (span.innerHTML == 'None' || span.innerHTML == '') {
        span.innerHTML = e.currentTarget.value
      }
      else {
        span.innerHTML = span.innerHTML+", "+e.currentTarget.value
      }
    }
    else {
      var selectionList = span.innerHTML.split(",").map( (selection) => {
        return selection.replace(" ","")
      })
      selectionList.splice(selectionList.indexOf(e.currentTarget.value) , 1)
      span.innerHTML = selectionList.toString().replace(",",", ")
      if (span.innerHTML == '') span.innerHTML = 'None'
    }
  }

  return (
    <>
      <div className='dropdown-elem'>
        <button className='dropdown-btn' value="Food" id='my-field-name' onClick={onDropdownBtnClick}>
          <span>None</span>
        </button>

        <div className='dropdown-menu'>
          <div className='dropdown-menu-item'>
              <label>Apple</label><input type='checkbox' name='my-field-name' value="Apple" onChange={onCheckboxSelect}></input>
          </div>
          <div className='dropdown-menu-item'>
              <label>Mango</label><input type='checkbox' name='my-field-name' value="Mango" onChange={onCheckboxSelect}></input>
          </div>
          <div className='dropdown-menu-item'>
              <label>Banana</label><input type='checkbox' name='my-field-name' value="Banana" onChange={onCheckboxSelect}></input>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
