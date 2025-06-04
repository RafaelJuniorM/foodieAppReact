import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/theme";
import Principal from "../screens/principal/principal.jsx";
import Cardapio from "../screens/cardapio/cardapio.jsx"
import DetalheProduto from "../screens/detalhe-produto/detalhe-produto.jsx";
import DetalhePedido from "../screens/detalhe-pedido/detalhe-pedido.jsx";

const Stack = createNativeStackNavigator();

export default function RotasAutenticadas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="detalhePedido"
          component={DetalhePedido}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="detalheProduto"
          component={DetalheProduto}
          options={{
            headerShown: false,
          }}
        />  
        <Stack.Screen
          name="principal"
          component={Principal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="cardapio"
          component={Cardapio}
          options={{
           headerShown: false,
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
