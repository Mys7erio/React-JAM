import { useState } from "react"

export default function InputAgnik() {
    const [textAgnik, setTextAgnik] = useState("")
    //textAgnik is a 
    
    function handleInputAgnik(event) {
        setTextAgnik(event.target.value)
    }

    // 
    function showText() {
        console.log(textAgnik)
    }

    return(
        <div className="input session">
            <br />
            <p>Agnik<input type="text" placeholder="Agnik" onInput={handleInputAgnik} /> </p>
            <button onClick={showText}>Lamba hai ri madam lamba😒</button>
            {/* <button onClick={showText}>Yash ka jalpara button</button> */}
            {/* <input type="email" placeholder="Example: Agnikpaul@gmail.com"/> */}
        </div>
    )
}