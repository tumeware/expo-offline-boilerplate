import * as React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

export function IconButton (props) {
  const { colors } = useTheme()
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: colors.smallButtonBgColor, borderColor: colors.smallButtonBorderColor}]}
    >
      <Feather
        name={props.iconName}
        size={colors.iconSize}
        color={props.iconColor ? props.iconColor : colors.smallButtonIconColor}
        style={styles.icon}
      />
    </TouchableOpacity>
  )
};

IconButton.defaultProps = {
  iconName: 'home'
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
    width: 60,
    height: 60
  },
  icon: {
    textAlign: 'center'
  }
});
