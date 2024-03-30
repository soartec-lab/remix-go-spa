import { Button } from "~/components/ui/button";

type Props = {
  id: string;
}

export default function Pet({id}: Props) {  
  return (
    <div>
      <Button onClick={() => console.log('hellow')}>Click me</Button>
      <h1>Pet</h1>
      <p>
        Pet ID: {id}
      </p>
    </div>
  );
}
