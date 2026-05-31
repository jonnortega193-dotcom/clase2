import Perfil from "./components/Perfil";
import Contador from "./components/Contador";

export default function App() {
  return (
    <div>
      <h1>Mini App React</h1>
      <Perfil nombre="Juan"/>
      <Contador/>
    </div>
  );
}