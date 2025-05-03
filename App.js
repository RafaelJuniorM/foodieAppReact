import Routes from "./src/routes/route";
import { View } from "react-native";
import RotasAutenticadas from "./src/routes/routesAutenticadas";


const userAutenticado = true;

export default function App() {
  return (
    
      userAutenticado ? <RotasAutenticadas/> : <Routes/>
    
  );
}

