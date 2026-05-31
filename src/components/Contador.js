import {useState} from "react";
import Boton from "./Boton";

export default function Contador() {
  const [n,setN]=useState(0);

  return (
    <div>
      <h2>Contador: {n}</h2>
      <Boton sumar={() => setN(n+1)}/>
    </div>
  );
}