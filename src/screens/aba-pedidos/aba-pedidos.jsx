import { FlatList, Image, Text, View } from "react-native";
import { pedidos } from "../../constants/dados";

import icons from "../../constants/icons";
import { styles } from "./aba-pedidos.style";

import Pedido from "../../components/pedido/pedido";

export default function AbaPedidos(props) {
  function DetalhePedido() {
    props.navigation.navigate("detalhePedido");
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pedidos}
        keyExtractor={(pedidos) => pedidos.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          // efetuando a desestruturação
          return (
            <Pedido
              logotipo={item.logotipo}
              nome={item.nome}
              vl_total={item.vl_total}
              dt_pedido={item.dt_pedido}
              status={item.status}
              onClickPedido={DetalhePedido}
            />
          );
        }}
        // caso nao tenha nenhum item apresenta esta imagem
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={() => {
          return (
            <View style={styles.empty}>
              <Image source={icons.remove} />
              <Text style={styles.emptyText}>
                {" "}
                Nenhum Favorito adicionado!!
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
