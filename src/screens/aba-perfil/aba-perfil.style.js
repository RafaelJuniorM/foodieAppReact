import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        paddingTop:12,
        backgroundColor: COLORS.white
    },
    item:{
        flexDirection: 'row',
        alignItems:'center',
        padding:12,
        
        borderBottomWidth:1,
        borderBottomColor: COLORS.gray
    },
    icone:{
        width:30,
        height:30
    },
    textos:{
        flex:1,
        marginLeft:10,
    },
    titulo:{
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md
    },
    subtitulo:{
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.sm
    },
    expandir:{
        width:20,
        height:20
    }
});
