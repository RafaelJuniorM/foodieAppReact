import { View,Text, TextInput } from "react-native";
import { styles } from "./textBox.style";


function TextBox(){
    return (
       <View >
           <Text>E-mail</Text>
           <TextInput style={styles.input}></TextInput>
       </View>
    )
}

export default TextBox;