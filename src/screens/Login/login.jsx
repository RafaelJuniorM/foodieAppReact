import { View,Text,TouchableOpacity } from "react-native";
import { styles } from "./login.style.js";

import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textBox/textBox";
import Button from "../../components/button/button.jsx";
import { useState } from "react";

function Login(props) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function ProcessarLogin(){
    console.log(email,senha);
  }
  return (
    <View style={styles.container}>
      <Header texto="acesse sua conta."></Header>
      <View style={styles.form}>
        <View style={styles.input}>
          <TextBox 
            label="E-mail" 
            placeholder="Digite seu e-mail"
            onChangeText = {(texto) => setEmail(texto)} //sempre que altera o texto a funçao sera chamada e passa o texto digitado
            value={email}
          >
          </TextBox>
        </View>
        <View style={styles.input}>
          <TextBox 
            label="Senha" 
            isPassword={true}
            onChangeText = {(texto) => setSenha(texto)} //sempre que altera o texto a funçao sera chamada
            value={senha} 
          >

          </TextBox>
        </View>

        <View>
            <Button title="Acessar" onPress={ProcessarLogin}></Button>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={()=> props.navigation.navigate("cadastro")}>
        <Text style={styles.footerText}> Criar minha conta</Text>
        </TouchableOpacity>
       
      </View>

    </View>
  );
}

export default Login;
