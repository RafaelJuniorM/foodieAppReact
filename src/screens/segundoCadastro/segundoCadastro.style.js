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
    twoInputs:{
        flexDirection: 'row',
        marginBottom: 15,
    },
    input70:{
        width: "70%",
        marginRight: 10
    },
    input30:{
        width: "25%"
    },
    form: {
        width: "100%",
        marginTop: 40,
        marginBottom: 30,
    },
    footer: {
        width: "100%",
        padding:20,
        height: 70,
        bottom: 0,
        backgroundColor: COLORS.white,
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