import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS } from '../constants/theme'; 

import Login from '../screens/Login/login';
import Cadastro from '../screens/cadastro/cadastro';
import segundoCadastro from '../screens/segundoCadastro/segundoCadastro';
import Home from '../screens/home/home';
const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>

            <Stack.Screen 
                    name="home" 
                    component={Home} 
                    options={{
                        headerShown: false
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
                        headerBackTitleStyle:{
                            fontSize: 18,
    
                        },
                         headerTintColor: COLORS.dark_gray
                    }}
                />
                <Stack.Screen 
                    name="segundoCadastro" 
                    component={segundoCadastro} 
                    options={{
                        headerShadowVisible: false, 
                        title: "",
                        headerBackTitle: "Voltar",
                        headerBackTitleStyle:{
                            fontSize: 18,
                        },
                        headerTintColor: COLORS.dark_gray
                    }}
                />
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}