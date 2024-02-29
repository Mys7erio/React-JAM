// React components are JS functions which return JSX elements

import Navbar from "./components/Navbar.jsx"
import ShakirButton from "./components/ShakirButton.jsx"

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      {/* React element */}
      <button>Login</button>

      {/* React component */}
      <ShakirButton text="Register" color="magenta" />

      <ShakirButton text="Login" color="Blue" />

      <ShakirButton name="Login" color="green" size="lg" />
    </div>
  )
}

