import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./perfil.style";
import icons from "../../constants/icons";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <View style={styles.containerIcone}>
          <Image source={icons.endereco} style={styles.icone}></Image>
        </View>

        <View style={styles.textos}>
          <Text style={styles.titulo}>Endereço</Text>
          <Text style={styles.subtitulo}>Meu Endereço de entrega</Text>
        </View>
        <View style={styles.containerIcone}>
          <Image source={icons.expandir} style={styles.expandir}></Image>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.containerIcone}>
          <Image source={icons.dados} style={styles.icone}></Image>
        </View>

        <View style={styles.textos}>
          <Text style={styles.titulo}>Endereço</Text>
          <Text style={styles.subtitulo}>Meu Endereço de entrega</Text>
        </View>
        <View style={styles.containerIcone}>
          <Image source={icons.expandir} style={styles.expandir}></Image>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.containerIcone}>
          <Image source={icons.logout} style={styles.icone}></Image>
        </View>

        <View style={styles.textos}>
          <Text style={styles.titulo}>Endereço</Text>
          <Text style={styles.subtitulo}>Meu Endereço de entrega</Text>
        </View>
        <View style={styles.containerIcone}>
          <Image source={icons.expandir} style={styles.expandir}></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
}
