import React, { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";

import { styles } from "./cadastro.style.js";

import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textBox/textBox.jsx";
import Button from "../../components/button/button.jsx";

export default function Cadastro(props) {

  const[nome, setNome] = useState("");
  const[email, setEmail] = useState("");
  const[senha, setSenha] = useState("");
  const[senhaConfirmada, setSenhaConfirmada] = useState("");

 
  return (
    <View style={styles.container}>
      <Header texto="cadastre uma conta."></Header>
      <ScrollView style={styles.scrool} automaticallyAdjustKeyboardInsets={true}>
        <View style={styles.form}>
          <View style={styles.input}>
            <TextBox
              label="Nome Completo "
              placeholder="Digite seu nome"
              onChangeText={(texto) => setNome(texto)}
              value ={nome}
            ></TextBox>
          </View>
          <View style={styles.input}>
            <TextBox 
              label="E-mail" 
              placeholder="seuemail@email.com"
              onChangeText={(texto) => setEmail(texto)}
              value ={email}  
            ></TextBox>
          </View>

          <View style={styles.input}>
            <TextBox l
              abel="Escolha uma senha" 
              isPassword={true}
              onChangeText={(texto) => setSenha(texto)}
              value ={senha}  
            ></TextBox>
          </View>

          <View style={styles.input}>
            <TextBox 
              label="Confirme sua senha" 
              isPassword={true}
              onChangeText={(texto) => setSenhaConfirmada(texto)}
              value ={senhaConfirmada}
            ></TextBox>
          </View>

          <View>
            <Button title="Próximo passo" onPress={()=> props.navigation.navigate("segundoCadastro")}> </Button>
          </View>
        </View>
      </ScrollView>

  
    </View>
  );
}
