import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./checkout.style";
import icons from "../../constants/icons";
import { pedido } from "../../constants/dados";
import Produto from "../../components/produto/produto";
import Button from "../../components/button/button";

export default function CheckOut() {
    function ClickRemove() {
        console.warn("Remover produto");    
    }

  return (
    <View style={styles.container}>
      <FlatList
        data={pedido.itens}
        keyExtractor={(item) => item.idProduto}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Produto
              key={item.idProduto}
              foto={item.foto}
              nome={item.nome}
              descricao={item.descricao}
              valor={item.valor}
                onClickRemove={ClickRemove}
                   
            />
          );
        }}
      />

      <View style={styles.footer}>
        <View style={styles.valores}>
          <Text style={styles.valor}>Resumo dos Valores</Text>
        </View>
        <View style={styles.valores}>
          <Text style={styles.total}>subtotal</Text>
          <Text style={styles.total}>R$ {pedido.vl_total}</Text>
        </View>

        <View style={styles.valores}>
          <Text style={styles.total}>Taxa de Entrega</Text>
          <Text style={styles.total}>R$ 5.00</Text>
        </View>

        <View style={styles.valores}>
          <Text style={styles.valor}>Total</Text>
          <Text style={styles.valor}>R$ {pedido.vl_total}</Text>
        </View>
      </View>

        <View style={styles.btn}>
            <Button title="Finalizar Pedido"/>
        </View>
      
    </View>
  );
}
