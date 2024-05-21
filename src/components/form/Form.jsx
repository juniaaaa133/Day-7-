import React, { useState } from 'react'
import './index.css'

const Form = ({createUser}) => {

let [info,setInfo] = useState({
    name : '',
    location : '',
    postal_code : ''
})

let logUser = (e) => {
e.preventDefault();
createUser(info)
}

let handleInput = (e) => {
 let char = e.target.value;
 let id = e.target.id;

 switch (id) {
    case 'name':
        setInfo({
            ...info,
            name : char
        })
        break;

    case 'code' :
        setInfo({
            ...info,
            postal_code : char
        })
        break;

    default:
        setInfo({
            ...info,
            location : char
        })
        break;
 }
}

  return (
    <form className="form">
        <input type="text" id='name' placeholder='Name' className="input" onChange={(e) => handleInput(e)}/>
        <input type="text" id='location' placeholder='Location' className="input" onChange={(e) => handleInput(e)}/>
        <input type="text" id='code' placeholder='Postal Code' className="input" onChange={(e) => handleInput(e)}/>
    <button className="btn main-f" onClick={(e) => logUser(e)}>Submit</button>
    </form>
    
  )
}

export default Form