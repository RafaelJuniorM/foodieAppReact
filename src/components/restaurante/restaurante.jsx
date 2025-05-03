import { Image, Text, TouchableOpacity, View } from "react-native";

import icons from "../../constants/icons";
import { styles } from "./restaurante.style";

export default function Restaurante(props) {
  return (
    <View style={styles.cardRestaurante}>
      <Image source={props.logotipo} style={styles.imgRestaurante} />
      <View style={styles.infoRestaurante}>
        <Text style={styles.textNameRest}> {props.nome}</Text>
        <Text style={styles.textEndereco}>{props.endereco}</Text>
      </View>
      <TouchableOpacity>
        <Image source={props.icone} style={styles.imgFavorite} />
      </TouchableOpacity>
    </View>
  );
}
