import { useState } from "react"

export default function InputRishabh(props) {
  const [textRishabh, setTextRishabh] = useState("")

  function updateTextRishabh(event) {
    setTextRishabh(event.target.value)
  }

  function showText() {
    console.log(textRishabh)
  }
  return (
    <div className="input-field">
      <input type="text" placeholder="Rishabh" onInput={updateTextRishabh} />
      <button onClick={showText}>Koi BKL hi hoga jo click nahi karega🤣</button>
    </div>
  )
}
