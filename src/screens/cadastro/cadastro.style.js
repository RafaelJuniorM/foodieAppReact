import { COLORS, FONT_SIZE } from "../../constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        justifyContent:'center',
        alignItems: "center"
    },
    input: {
        width: "100%",
        marginBottom: 15,
        
    },
    form: {
        width: "100%",
        marginTop: 40,
        marginBottom: 90,
    },
    footer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        marginBottom: 100
    },
    footerText: {
        textAlign: "center",
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md
    }
})