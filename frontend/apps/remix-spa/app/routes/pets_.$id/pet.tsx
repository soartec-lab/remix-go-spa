type Props = {
  id: string;
}

export default function Pet({id}: Props) {  
  return (
    <div>
      <h1>Pet</h1>
      <p>
        Pet ID: {id}
      </p>
    </div>
  );
}
