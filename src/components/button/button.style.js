import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create ({
    btn: {
        width: "100%",
        borderRadius:6,
        backgroundColor: COLORS.red
    },

    text: {
        fontSize: FONT_SIZE.md,
        color: '#fff',
        padding: 14,
        textAlign: 'center'
    }
   
})