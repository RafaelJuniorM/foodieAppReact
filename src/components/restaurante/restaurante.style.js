import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  cardRestaurante: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  imgRestaurante: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  imgFavorite: {
    width: 30,
    height: 30,
  },
  textEndereco: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm,
  },
  textNameRest: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
    marginBottom:3
  },
  infoRestaurante:{
    flex: 1,
    padding: 8
  }
});
