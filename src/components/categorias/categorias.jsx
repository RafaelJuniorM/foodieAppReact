import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./categorias.styles";
export default function Categorias(props) {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          // loop pecorrendo um lista
          props.dados.map((categoria, index) => {
            return (
              <View key={index} style={styles.categoria}>
                <TouchableOpacity>
                  <Image style={styles.icone} source={categoria.icone} />
                  <Text style={styles.descricao}> {categoria.descricao}</Text>
                </TouchableOpacity>
              </View>
            );
          })
        }
      </ScrollView>
    </View>
  );
}
