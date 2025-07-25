import React, { useState } from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";

import { styles } from "./aba-home.style";
import icons from "../../constants/icons";

import { SafeAreaView } from "react-native-safe-area-context";

// importando os components
import TextBox from "../../components/textBox/textBox";
import Categorias from "../../components/categorias/categorias";
import Banners from "../../components/banners/banners";
import Restaurante from "../../components/restaurante/restaurante";
//importando os dados API
import { categorias, banners, restaurantes } from "../../constants/dados";


export default function AbaHome(props) {

  function OpenCardapio(){
    props.navigation.navigate("cardapio");
  }

  const [busca, setBusca] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerHome}>
        <Image source={icons.logo} style={styles.logo}></Image>
        <TouchableOpacity
          style={styles.favorito}
          onPress={() => props.navigation.navigate("checkout")}>
            <Image source={icons.cart} style={styles.cart}></Image>
          </TouchableOpacity>
        
      </View>

      <View style={styles.busca}>
        <TextBox
          placeholder="O que vamos pedir hoje?"
          onChangeText={(texto) => setBusca(texto)}
          value={busca}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categorias dados={categorias} />

        <Banners dados={banners} />
        <Text> Destaques </Text>
        {restaurantes.map((restaurantes, index) => {
          return (
            <View key={index}>
              <Restaurante
                logotipo={restaurantes.logotipo}
                nome={restaurantes.nome}
                endereco={restaurantes.endereco}
                icone={icons.favoritoFull}
                onPress={OpenCardapio}
              />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
