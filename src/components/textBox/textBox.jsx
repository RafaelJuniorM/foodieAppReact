import { View,Text, TextInput } from "react-native";
import { styles } from "./textBox.style";


function TextBox(props){
    return (
       <View >
            {
                props.label && <Text style={styles.label}>{props.label}</Text> //renderizar a label somente se ela foi passada como propriedade. 
            }
           
           <TextInput 
                style={styles.input}
                placeholder={props.placeholder}
                secureTextEntry={props.isPassword}
                onChangeText={(texto) => props.onChangeText(texto)}
                value={props.value}
           ></TextInput>
       </View>
    )
}

export default TextBox;