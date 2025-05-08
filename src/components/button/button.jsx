import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

function Button(props){
    return (
        <TouchableOpacity style={styles.btn} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button;      