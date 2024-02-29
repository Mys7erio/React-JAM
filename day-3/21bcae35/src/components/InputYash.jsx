import {useState} from 'react'

const InputYash = () => {

  const [text, setText] = useState('')

  const updateText = (e) => { 
    setText(e.target.value);
  }

  const showText = () => {
    console.log(text);
  }

  return (
    <div>
      <input placeholder='Yash' type="text" onChange={showText}/>
      <button onClick={showText}>Koi BKL hi hoga jo nahi dabayega</button>
    </div>
  )
}

export default InputYash