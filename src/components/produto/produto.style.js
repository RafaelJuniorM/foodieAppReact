import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";
import { usePreventRemoveContext } from "@react-navigation/native";

export const styles = StyleSheet.create({
produto:{
    width: '100%',
    flexDirection: 'row',
    marginBottom:10,
    marginTop: 10
   
    
},

foto:{
    width: 80,
    height: 80,
    borderRadius: 6
},
textos:{
    flex: 1,
    padding:8
}, 
preco:{
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray, 
    marginTop: 8
},
nome:{
   fontSize: FONT_SIZE.sm,
   color: COLORS.dark_gray,
   marginBottom: 2 
},
descricao:{
   fontSize: FONT_SIZE.sm,
   color: COLORS.medium_gray, 
},

containerRemove:{
    alignItems:'flex-end',
    marginTop: 8

},


remove:{
    width: 30,
    height: 30,
},
});
