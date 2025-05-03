import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create ({
   icone: {
       width:65,
       height:65,

    },

    descricao: {
        fontSize: FONT_SIZE.xsm,
        color: COLORS.dark_gray,
        textAlign: "center"
       
    },
    categoria:{
        paddingRight: 10
    }
   
})