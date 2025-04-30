import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";

import { styles } from "./cadastro.style.js";

import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textBox/textBox.jsx";
import Button from "../../components/button/button.jsx";

export default function Cadastro() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header texto="cadastre uma conta."></Header>
        <View style={styles.form}>
          <View style={styles.input}>
            <TextBox
              label="Nome Completo "
              placeholder="Digite seu nome"
            ></TextBox>
          </View>
          <View style={styles.input}>
            <TextBox label="E-mail" placeholder="seuemail@email.com"></TextBox>
          </View>

          <View style={styles.input}>
            <TextBox label="Escolha uma senha" isPassword={true}></TextBox>
          </View>

          <View style={styles.input}>
            <TextBox label="Confirme sua senha" isPassword={true}></TextBox>
          </View>

          <View>
            <Button title="Próximo passo"></Button>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.footerText}> Acessar minha conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
