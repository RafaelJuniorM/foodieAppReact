import { View } from "react-native";
import { styles } from "./login.style.js";


import Header from "../../components/header/header";
import TextBox from "../../components/textBox/textBox";
import Button from "../../components/button/button.jsx"
function Login(){
    return (
       <View style={styles.container}>
            <Header texto="acesse sua conta."></Header>
            <TextBox></TextBox>
       </View>
    )
}

export default Login;