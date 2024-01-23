import React from 'react'
import { useState } from 'react'

export default function form() {
    const [name, setName ] = useState("")

    function submitHandler(event){
        event.preventDefault();
        alert("this was actually my ,${name}")
    }
  return (
    <div>
      <h1>this is my form</h1>
      <form onSubmit = {submitHandler}>
        <label>this is my name 
            <input
            type='text'
            value='name'
            onChange={(e) => setName(e.target.value)}/>
        </label>
        <input type='submit'/>
      </form>
    </div>
  )
}
