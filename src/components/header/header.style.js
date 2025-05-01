import { COLORS, FONT_SIZE } from "../../constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        width:"100%",
        alignItems:"center",
      
    },
    logo: {
        width: 170,
        height: 50,
    },
    title: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
        textAlign:'center'
    }
})