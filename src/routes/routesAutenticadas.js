import { TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/theme";
import Principal from "../screens/principal/principal.jsx";
import Cardapio from "../screens/cardapio/cardapio.jsx"
import DetalheProduto from "../screens/detalhe-produto/detalhe-produto.jsx";
import DetalhePedido from "../screens/detalhe-pedido/detalhe-pedido.jsx";
import CheckOut from "../screens/checkout/checkout.jsx";

const Stack = createNativeStackNavigator();

export default function RotasAutenticadas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
          name="principal"
          component={Principal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="detalhePedido"
          component={DetalhePedido}
          options={{
            headerShadowVisible: false,
            title: "Detalhe do Pedido",
            headerTitleAlign: 'center',
            animation: 'flip'

          }}
        />
          <Stack.Screen
          name="checkout"
          component={CheckOut}
          options={{
            headerShadowVisible: false,
            title: "Meu Pedido",
            headerTitleAlign: 'center',
            animation: 'flip',
            headerRight: () =>{
              return( 
                <TouchableOpacity>
                  <Text style={{color: COLORS.red}}> Limpar</Text>
                </TouchableOpacity>
              )
            }

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
