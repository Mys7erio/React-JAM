// Excercise: Create a button inside the components folder. You should able to use it in your App.jsx file and be able to pass props to it

import { useState } from "react"
import "./Button.css"

export default function Button({ text, color }) {
  const [count, setCount] = useState(100)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick} className="bg-orange-500 h-5">
      {text} {count}
    </button>
  )
}
