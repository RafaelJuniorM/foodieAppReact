import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor: COLORS.white,
    
},
header:{
    width: "100%",
    height: 40,
  
},
containerFoto:{
    alignItems: "center",

},
foto: {
    height: 300
},
containerBack:{
    position: "absolute",
    top: 50,
    left: 25
},
nome:{
    fontSize: FONT_SIZE.md,
    fontWeight: 'bold',
    color: COLORS.dark_gray,
    marginTop: 10,
    marginBottom: 5
},
back:{
    height: 40,
    width: 40,
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 5
},

headerTexto:{
    flex: 1
},
 
price:{
   fontSize: FONT_SIZE.md,
   fontWeight: 'bold',
   color: COLORS.dark_gray,
   marginBottom: 2 , 
   marginTop: 15
},
descricao:{
    fontSize: FONT_SIZE.md,
   color: COLORS.medium_gray,

},
headerObservacoes:{
    padding: 10,
   width: "100%",
},
multiline:{
    flex: 1,
   
    backgroundColor: COLORS.gray,
    borderRadius: 5,
    padding: 10,
    color: COLORS.dark_gray,

    borderWidth: 1,
    borderColor: COLORS.gray,

    minHeight: 200,
    textAlignVertical: 'top',
},

footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    padding: 25,
},

iconequantidade: {
    height: 40,
    width: 40,
    
},

quantidade:{
    fontSize: FONT_SIZE.md,
    fontWeight: 'bold',
    color: COLORS.dark_gray,
    width: 35,
    textAlign: 'center',
},

botaoInserir:{
    flex:1,
    margin:5

}

});
