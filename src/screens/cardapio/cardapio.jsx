import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import { styles } from "./cardapio.style";
import { restaurante } from "../../constants/dados";
import icons from "../../constants/icons";
import Produto from "../../components/produto/produto";

export default function Cardapio(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerFoto}>
        <Image
          source={restaurante.foto}
          style={styles.foto}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.containerBack} onPress={props.navigation.goBack}>
          <Image source={icons.back} style={styles.back} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerTexto}>
            <Text style={styles.nome}>Nome do estabelecimento</Text>
            <Text style={styles.taxa}>Taxa de entrega: R$ 5,00</Text>
          </View>

          <Image source={icons.favoritoFull} style={styles.favoritoImg} />
        </View>

        <View style={styles.location}>
          <Image source={icons.location} style={styles.locationImg} />
          <Text style={styles.endereco}> endereço estabelecimento</Text>
        </View>

        {restaurante.cardapio.map((item) => {
          return (
            <View key={item.idCategoria} style={styles.containerProduto}>
              <Text style={styles.titleCategoria}>{item.categoria}</Text>

              {item.itens.map((produto) => {
                return (
                  <Produto
                    key={produto.idProduto}
                    idProduto={produto.idProduto}
                    foto={produto.foto}
                    nome={produto.nome}
                    descricao={produto.descricao}
                    valor={produto.valor}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
