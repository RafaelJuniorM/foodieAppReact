import { View,Text, TextInput } from "react-native";
import { styles } from "./textBox.style";


function TextBox(props){
    return (
       <View >
           <Text style={styles.label}>{props.label}</Text>
           <TextInput 
                style={styles.input}
                placeholder={props.placeholder}
                secureTextEntry={props.isPassword}
           ></TextInput>
       </View>
    )
}

export default TextBox;