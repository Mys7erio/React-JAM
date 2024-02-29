export default function ShakirButton({ name, color, size }) {
  // Take the props object and render the value of the key which is called name
  // We use props to customize the reusable component

  return (
    <button>
      {name} {color} {size}
    </button>
  )
}
