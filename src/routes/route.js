import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS } from "../constants/theme";

//importando as screens
import Login from "../screens/Login/login";
import Cadastro from "../screens/cadastro/cadastro";
import segundoCadastro from "../screens/segundoCadastro/segundoCadastro";
import Home from "../screens/home/home";
import Favoritos from "../screens/favoritos/favoritos";
import Pedidos from "../screens/pedidos/pedidos";
import Perfil from "../screens/perfil/perfil";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name="Peril"
          component={Perfil}
          options={{
            title: "Perfil",
            headerTitleAlign: "center",
            headerShadowVisible: false
          }}
        />

      <Stack.Screen
          name="Meus Pedidos"
          component={Pedidos}
          options={{
            title: "Meus Pedidos",
            headerTitleAlign: "center",
            headerShadowVisible: false
          }}
        />
      <Stack.Screen
          name="Favoritos"
          component={Favoritos}
          options={{
            title: "Favoritos",
            headerTitleAlign: "center",
            headerShadowVisible: false
          }}
        />
    
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="cadastro"
          component={Cadastro}
          options={{
            headerShadowVisible: false,
            title: "",
            headerBackTitle: "Voltar",
            headerBackTitleStyle: {
              fontSize: 18,
            },
            headerTintColor: COLORS.dark_gray,
          }}
        />
        <Stack.Screen
          name="segundoCadastro"
          component={segundoCadastro}
          options={{
            headerShadowVisible: false,
            title: "",
            headerBackTitle: "Voltar",
            headerBackTitleStyle: {
              fontSize: 18,
            },
            headerTintColor: COLORS.dark_gray,
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
