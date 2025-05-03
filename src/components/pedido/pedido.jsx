import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./pedido.style";

export default function Pedido(props) {
  return (
    <View style={styles.cardPedido}>
      <Image source={props.logotipo} style={styles.logotipo} />
      <View style={styles.infoPedido}>
        <Text>{props.nome}</Text>
        <View style={styles.infofDt_Vl}>
          <Text style={styles.textValor}>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(props.vl_total)}
          </Text>
          <Text style={styles.textValor}>{props.dt_pedido}</Text>
        </View>
        <Text style={styles.status}>{props.status}</Text>
      </View>
    </View>
  );
}
