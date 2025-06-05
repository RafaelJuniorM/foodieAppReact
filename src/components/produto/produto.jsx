import { Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./produto.style";
import icons from "../../constants/icons";

export default function Produto(props) {
  return (
    <TouchableOpacity style={styles.produto}>
      <Image source={props.foto} style={styles.foto} />
      <View style={styles.textos}>
        <Text style={styles.nome}>{props.nome}</Text>
        <Text style={styles.descricao}>{props.descricao}</Text>
      </View>
      <View style={styles.preco}>
        <Text>
          {new Intl.NumberFormat("pt-BT", {
            style: "currency",
            currency: "BRL",
          }).format(props.valor)}
        </Text>
          {
            props.onClickRemove &&
              // Se a função onClickRemove for passada, renderiza o botão de remover
            <TouchableOpacity style={styles.containerRemove} onPress={props.onClickRemove}>
              <Image source={icons.remove} style={styles.remove} />
            </TouchableOpacity>
            
          }
        
      </View>
    </TouchableOpacity>
  );
}
