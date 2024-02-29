import InputAgnik from "./components/InputAgnik"
import InputShakir from "./components/InputShakir"
import Jeffin from "./components/Jeffin.jsx"
import InputRishabh from "./components/InputRishabh"
import InputYash from "./components/InputYash"
import Akash from "./components/Akash.jsx"

import './App.css'
import { useState } from "react"

export default function App() {

  const [textShakir, setTextShakir] = useState('')

  function updateTextShakir(event) {
    console.log(event)
    console
  }

  return (
    <div className="app">
      {/* <button>Login</button> */}
      <InputShakir />
      <Jeffin />
      <Akash />
      <InputRishabh />
      <InputAgnik />
      <InputYash />
    </div>
  )
}
