import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create ({
   icone: {
       width:220,
       height:120,

    },

    descricao: {
        fontSize: FONT_SIZE.xsm,
        color: COLORS.dark_gray,
        textAlign: "center"
       
    },
    banner:{
        paddingRight: 10,
        marginTop: 15,
        marginBottom: 15
    }
   
})