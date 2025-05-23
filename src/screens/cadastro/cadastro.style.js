import { COLORS, FONT_SIZE } from "../../constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 40,
        alignItems:'center',
       
        backgroundColor: COLORS.white
    },
    input: {
        width: "100%",
        marginBottom: 15,
        
    },
    form: {
        width: "100%",
        marginTop: 40,
        marginBottom: 30,
    },
    footer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        marginBottom: 140,
        backgroundColor: COLORS.white
    },
    footerText: {
        textAlign: "center",
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md
    },
    scrool:{
        width:"100%"
    }
})