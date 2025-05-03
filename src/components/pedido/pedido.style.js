import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  cardPedido: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  logotipo: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  textNameRest: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
    marginBottom: 3,
  },
  infoPedido: {
    flex: 1,
    padding: 8,
  },
  infofDt_Vl: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    marginTop: 4,
    color: COLORS.red
  },
  status: {
    color: COLORS.green,
    fontSize: FONT_SIZE.md,
  },
  textValor:{
    color: COLORS.medium_gray
  }
});
