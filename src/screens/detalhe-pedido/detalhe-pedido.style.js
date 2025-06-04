

import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor: COLORS.white,
    padding: 20,
    paddingTop: 60
    
},
containerBack:{
    position: "absolute",
    top: 5,
    left: 0
},
header:{
    width: "100%",
    padding: 10,
    justifyContent: 'center',
    marginBottom: 20
    
},
tituloPedido:{
    fontSize: FONT_SIZE.md,
    fontWeight: 'bold',
    color: COLORS.dark_gray,
    textAlign: 'center',
},
back:{
    height: 30,
    width: 30,
    backgroundColor: "#fff",
   
},

valor:{
   fontSize: FONT_SIZE.md,
   fontWeight: 'bold',
   color: COLORS.light_gray,
   marginBottom: 2 , 
   marginTop: 15
},

footer: {
    padding: 10,
},
valores:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4, 
    marginTop: 4
},
total: {
    fontSize: FONT_SIZE.sm,
    fontWeight: 'bold',
    color: COLORS.dark_gray,
    marginBottom: 2 , 
    marginTop: 2
}

});
