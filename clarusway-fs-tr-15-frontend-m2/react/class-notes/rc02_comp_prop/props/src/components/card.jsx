import { Foto } from "./foto"
export const Card = ({name,tel,src}) => {
  return (
    <div>
      <h2>Hello {name}</h2>
      <Foto src={src}/>
      <p> Telephone: {tel}</p>
    </div>
  );
}
