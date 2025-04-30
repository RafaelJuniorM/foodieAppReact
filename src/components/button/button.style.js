import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create ({
    btn: {
        width: "70%",
        height: 50,
        borderRadius:12,
        backgroundColor: COLORS.red,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: FONT_SIZE.md,
        color: '#fff',
    }
   
})