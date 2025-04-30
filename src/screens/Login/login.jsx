import { View,Text,TouchableOpacity } from "react-native";
import { styles } from "./login.style.js";

import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textBox/textBox";
import Button from "../../components/button/button.jsx";

function Login() {
  return (
    <View style={styles.container}>
      <Header texto="acesse sua conta."></Header>
      <View style={styles.form}>
        <View style={styles.input}>
          <TextBox label="E-mail" placeholder="Digite seu e-mail"></TextBox>
        </View>
        <View style={styles.input}>
          <TextBox label="Senha" isPassword={true}></TextBox>
        </View>

        <View>
            <Button title="Acessar"></Button>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
        <Text style={styles.footerText}> Criar minha conta</Text>
        </TouchableOpacity>
       
      </View>

    </View>
  );
}

export default Login;
