import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// importando telas acessadas somente apos login 
import Home from "../screens/home/home";
import Favoritos from "../screens/favoritos/favoritos";
import Pedidos from "../screens/pedidos/pedidos";
import Perfil from "../screens/perfil/perfil";
import { Image } from "react-native";
import icons from "../constants/icons";

//importando o icones 

const Tab = createBottomTabNavigator();

export default function RotasAutenticadas(){
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false
            }}>
                <Tab.Screen name="home" component={Home} options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) =>{
                        return (
                            <Image source={icons.abaHome} style={{width:25, height:25, opacity: focused ? 1: 0.3}}/>
                        )
                    }
                }}/>
                
                <Tab.Screen name="favoritos" component={Favoritos} options={{
                     title: "Favoritos",
                     headerTitleAlign: "center",
                     headerShadowVisible: false,
                    tabBarIcon: ({focused}) =>{
                        return (
                            <Image source={icons.abaFavorito} style={{width:25, height:25, opacity: focused ? 1: 0.3}}/>
                        )
                    }
                }}/>
                
                <Tab.Screen name="pedidos" component={Pedidos} options={{
                    title: "Pedidos",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    tabBarIcon: ({focused}) =>{
                        return (
                            <Image source={icons.abaPedido} style={{width:25, height:25, opacity: focused ? 1: 0.3}}/>
                        )
                    }
                }}/>
                
                <Tab.Screen name="perfil" component={Perfil} options={{
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
        </NavigationContainer>
    )
}