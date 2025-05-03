import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./banners.styles";

export default function Banners(props) {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          // loop pecorrendo um lista
          props.dados.map((banner, index) => {
            return (
              <View key={index} style={styles.banner}>
                <TouchableOpacity>
                  <Image style={styles.icone} source={banner.icone} />
                </TouchableOpacity>
              </View>
            );
          })
        }
      </ScrollView>
    </View>
  );
}
