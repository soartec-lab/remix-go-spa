import { useState } from "react"
import { Flex, Button } from '@radix-ui/themes';

export default function Pets() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Flex direction="column" gap="2">
        <Button>Let's go</Button>
      </Flex>

      <h1>Pets</h1>
      <p>
        Count: {count}
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}