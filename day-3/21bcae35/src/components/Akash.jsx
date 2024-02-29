import { useState } from "react"

export default function Akash(params) {
  const [textAkash, setTextAkash] = useState("")
  const [password, setPassword] = useState("")

  function setInput(event) {
    setTextAkash(event.target.value)
  }
  function showText() {
    console.log(textAkash)
    console.log(password)
  }

  const updatePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div>
      <input type="email" placeholder="akashseervi402@gmail.com" onInput={setInput} />
      <input type="password" placeholder="123" onChange={updatePassword} />
      <button onClick={showText}>CLICK HERE</button>
    </div>
  )
}
