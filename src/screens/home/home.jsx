import React, {useState} from "react";
import { Image, View } from "react-native";

import { styles } from "./home.style";
import icons from "../../constants/icons";

import { SafeAreaView } from "react-native-safe-area-context";

// importando os components 
import TextBox from "../../components/textBox/textBox";


export default function Home(){

    const [busca, setBusca] = useState("")

    return (
        <SafeAreaView style={styles.container}>
             <View style={styles.headerHome}>
                <Image source={icons.logo} style={styles.logo}></Image>
                <Image source={icons.cart} style={styles.cart}></Image>
            </View>

            <View style={styles.busca}>
                <TextBox placeholder="O que vamos pedir hoje?" onChangeText={(texto)=>setBusca(texto)} value={busca}/>
            </View>










        </SafeAreaView>
        
    )
}