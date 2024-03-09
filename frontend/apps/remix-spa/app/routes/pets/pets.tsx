import { useState } from "react"

export default function Pets() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Pets</h1>
      <p>
        Count: {count}
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}