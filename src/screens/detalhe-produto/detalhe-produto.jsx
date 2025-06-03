import { View, Image, TouchableOpacity, Text, ScrollView, TextInput } from "react-native";
import { styles } from "./detalhe-produto.style";
import icons from "../../constants/icons";
import Button from "../../components/button/button";

export default function DetalheProduto(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerFoto}>
        <Image
          source={icons.produto}
          style={styles.foto}
          resizeMode="cover"
        />

        <TouchableOpacity style={styles.containerBack} onPress={props.navigation.goBack}>
          <Image source={icons.back} style={styles.back} />
        </TouchableOpacity>
      </View>

    
        <View style={styles.header}>
          <View style={styles.headerTexto}>
            <Text style={styles.nome}>Pizza Calabresa</Text>
            <Text style={styles.descricao}>Massa artesanal, mussarela e calabresa.Serve de 3 a 4 pessoas. Molho e tomate 100% natural e ingredientes selecionados </Text>
            <Text style={styles.price}>R$ 30,00</Text>
          </View>
        </View>

        <View style={styles.headerObservacoes}>
            <Text style={styles.descricao}> Observações</Text>
            <TextInput
                style={styles.multiline}
                multiline={true}
                numberOfLines={5}
            />
        </View>

        <View style={styles.footer}>
            <TouchableOpacity style={styles.botaoAdicionar}>
                <Image source={icons.mais} style={styles.iconequantidade} />
            </TouchableOpacity>
            <Text style={styles.quantidade}> 1</Text>
            <TouchableOpacity>    
                <Image source={icons.menos} style={styles.iconequantidade} />
            </TouchableOpacity>

            <View style={styles.botaoInserir}>
                <Button title="Inserir"></Button>
            </View>
        </View> 
        


        
     
    </View>
  );
}
