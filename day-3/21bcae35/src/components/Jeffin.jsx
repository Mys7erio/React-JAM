import { useState } from "react"

export default function Jeffin() {
  const [emailJeffin, setEmail] = useState("")

  function updateEmail(event) {
    setEmail(event.target.value)
  }

  function showText() {
    console.log(emailJeffin)
  }

  return (
    <div>
      <input
        type="email"
        onChange={updateEmail}
        placeholder="[Jeffin] Enter your email"
      />
      <button onClick={showText}>Update email</button>
    </div>
  )
}
