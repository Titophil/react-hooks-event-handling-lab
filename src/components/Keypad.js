// Code Keypad Component Here
import React, { useState} from "react";

function Keypad (){

    const[text, setText] = useState("")

    function handleChange(event){
        setText(event.target.value)

        console.log("Entering password...")
    }

    return (
        <div>
            <input
            type="password"
            value={text}
            onChange={handleChange}
            >
            </input>
        </div>
    )
}
export default Keypad;