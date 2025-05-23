import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: COLORS.light_gray,
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.gray
  },
  label: {
    marginLeft: 5,
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
    marginBottom: 4,
  },
});
