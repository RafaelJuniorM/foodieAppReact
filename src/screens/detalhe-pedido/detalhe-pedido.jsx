import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./detalhe-pedido.style";
import icons from "../../constants/icons";
import { pedido } from "../../constants/dados";
import Produto from "../../components/produto/produto";


export default function DetalhePedido() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.containerBack}>
          <Image source={icons.back} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.tituloPedido}>Detalhes do Pedido</Text>
      </View>

        <FlatList
            data={pedido.itens}
            keyExtractor={(item) =>item.idProduto}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) =>{
                return(
                    <Produto
                        key={item.idProduto}
                        foto={item.foto}
                        nome={item.nome}
                        descricao={item.descricao}
                        valor={item.valor}
                    
                    />
                )
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
    </View>
  );
}
