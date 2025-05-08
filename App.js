import Routes from "./src/routes/route";
import { View } from "react-native";
import RotasAutenticadas from "./src/routes/routesAutenticadas";
import Busca from "./src/screens/busca/busca";

const userAutenticado = false;

export default function App() {
  return (
    
      userAutenticado ? <RotasAutenticadas/> : <Routes/>
      
  );
}

