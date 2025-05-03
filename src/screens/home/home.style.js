import { COLORS, FONT_SIZE } from "../../constants/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create( {
    container: {
        
        flex: 1,
        padding: 12,
        backgroundColor: COLORS.white
    },
    logo: {
        width:140,
        height: 27,
    },
    cart: {
        width:30,
        height:30
    },
    headerHome: {
        height: 45,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    busca:{
        marginBottom: 10,
    },
   
})