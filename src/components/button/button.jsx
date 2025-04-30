import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

function Button(props){
    return (
        <TouchableOpacity style={styles.btn} onPress={()=>console.log('clicou em salvar')}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button; 