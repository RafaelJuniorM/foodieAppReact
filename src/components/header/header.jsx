import { Image,Text, View } from "react-native";
import { styles } from "./header.style.js";
import icons from "../../constants/icons"

function Header(props){
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={icons.logo}></Image>
            <Text style={styles.title}> {props.texto} </Text>
        </View>
        
    )
}

export default Header;