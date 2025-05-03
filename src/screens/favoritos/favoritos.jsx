import { FlatList, Image, Text, View } from "react-native";
import { restaurantes } from "../../constants/dados";

import icons from "../../constants/icons";
import { styles } from "./favoritos.style";

import Restaurante from "../../components/restaurante/restaurante";

export default function Favoritos(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantes}
        keyExtractor={(restaurantes) => restaurantes.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          // efetuando a desestruturação
          return (
            <Restaurante
              nome={item.nome}
              endereco={item.endereco}
              logotipo={item.logotipo}
              icone={icons.remove}
            />
          );
        }}

        // caso nao tenha nenhum item apresenta esta imagem 
        contentContainerStyle={styles.containerList}

        ListEmptyComponent={()=>{
            return (
                <View style={styles.empty}> 
                    <Image source={icons.remove}/>
                    <Text style={styles.emptyText}> Nenhum Favorito adicionado!!</Text>
                </View>
            )
        }}

      />
    </View>
  );
}
