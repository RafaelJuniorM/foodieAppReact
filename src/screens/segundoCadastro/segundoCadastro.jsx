import React, {useState} from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";

import { styles } from "./segundoCadastro.style.js";

import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textBox/textBox.jsx";
import Button from "../../components/button/button.jsx";

export default function SegundoCadastro() {

    const[endereco, setEndereco] = useState("");
    const[complemento, setComplemento] = useState("");
    const[bairro, setBairro] = useState("");
    const[cidade, setCidade] = useState("");
    const[uf, setUF] = useState("");
    const[cep, setCep] = useState("");
  

  return (
    <View style={styles.container}>
      <Header texto="Informe seu endereço"></Header>
      <ScrollView style={styles.scrool} automaticallyAdjustKeyboardInsets={true}>
        <View style={styles.form}>
          <View style={styles.twoInputs}>
            <View style={styles.input70}>
            <TextBox 
              label="Endereço" 
              placeholder="Digite seu endereço"
              onChangeText={(texto) => setEndereco(texto)}
              value ={endereco}  
            ></TextBox>
            </View>
            <View style={styles.input30}>
            <TextBox 
              label="Compl."
              onChangeText={(texto) => setComplemento(texto)}
              value ={complemento}  
            ></TextBox>
            </View>
          </View>

          <View style={styles.input}>
            <TextBox 
              label="Bairro"
              onChangeText={(texto) => setBairro(texto)}
              value ={bairro}
            ></TextBox>
          </View>

          <View style={styles.twoInputs}>
            <View style={styles.input70}>
            <TextBox 
              label="Cidade" 
              onChangeText={(texto) => setCidade(texto)}
              value ={cidade}
            ></TextBox>
            </View>
            <View style={styles.input30}>
            <TextBox 
              label="UF"
              onChangeText={(texto) => setUF(texto)}
              value ={uf}
            ></TextBox>
            </View>
          </View>

          <View style={styles.input}>
            <TextBox 
              label="CEP"
              onChangeText={(texto) => setCep(texto)}
              value ={cep}
            ></TextBox>
          </View>

          <View>
            <Button title="Criar minha conta"></Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
