import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

function Button(){
    return (
        <TouchableOpacity style={styles.btn}>
            <Text> Isso é um botao </Text>
        </TouchableOpacity>
    )
}

export default Button; 