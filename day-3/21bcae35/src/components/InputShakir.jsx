import { useState } from "react"

export default function InputShakir() {
  const [textShakir, setTextShakir] = useState("")

  function updateTextShakir(event) {
    setTextShakir(event.target.value)
  }

  function showText() {
    console.log(textShakir)
  }

  return (
    <>
      <input type="text" placeholder="Shakir" onChange={updateTextShakir} />
      <button onClick={showText}>Show Text</button>
    </>
  )
}
