import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// importando telas acessadas somente apos login 
import AbaHome from "../../screens/aba-home/aba-home";
import AbaFavoritos from "../../screens/aba-favoritos/aba-favoritos";
import AbaPedidos from "../../screens/aba-pedidos/aba-pedidos";
import AbaPerfil from "../../screens/aba-perfil/aba-perfil";
//importando o icones e imgs 
import { Image } from "react-native";
import icons from "../../constants/icons";

const Tab = createBottomTabNavigator();
export default function Principal() {
    return(
         <Tab.Navigator screenOptions={{
                tabBarShowLabel: false
            }}>
                <Tab.Screen name="Abahome" component={AbaHome} options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) =>{
                        return (
                            <Image source={icons.abaHome} style={{width:25, height:25, opacity: focused ? 1: 0.3}}/>
                        )
                    }
                }}/>
                
                <Tab.Screen name="Abafavoritos" component={AbaFavoritos} options={{
                     title: "Favoritos",
                     headerTitleAlign: "center",
                     headerShadowVisible: false,
                    tabBarIcon: ({focused}) =>{
                        return (
                            <Image source={icons.abaFavorito} style={{width:25, height:25, opacity: focused ? 1: 0.3}}/>
                        )
                    }
                }}/>
                
                <Tab.Screen name="Abapedidos" component={AbaPedidos} options={{
                    title: "Pedidos",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    tabBarIcon: ({focused}) =>{
                        return (
                            <Image source={icons.abaPedido} style={{width:25, height:25, opacity: focused ? 1: 0.3}}/>
                        )
                    }
                }}/>
                
                <Tab.Screen name="Abaperfil" component={AbaPerfil} options={{
                    title: "Perfil",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    tabBarIcon: ({focused}) =>{
                        return (
                            <Image source={icons.abaPerfil} style={{width:25, height:25, opacity: focused ? 1: 0.3}}/>
                        )
                    }
                }}/>    

            </Tab.Navigator>
        

    )
}