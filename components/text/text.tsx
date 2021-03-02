import * as React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import {AppLoading} from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue'
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
import { useTheme } from "@react-navigation/native"
import i18n from 'i18n-js'

export function CustomText (props) {
  const { colors } = useTheme()

  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular, Roboto_400Regular
  });

  if (!fontsLoaded) {
    //return <AppLoading />;
    return null;
  } else {
    return (
      <View style={props.containerStyle}>
        <Text
          {...props}
          AccessibilityRole="text"
          adjustsFontSizeToFit
          style={[props.style, { fontFamily: props.title ? 'BebasNeue_400Regular' : 'Roboto_400Regular', color: props.color, fontSize: props.size }]}>
            {i18n.t(props.langText) || props.text}
        </Text>
      </View>
    );
  }
};

CustomText.defaultProps = {
  langText: 'test.i18nTest'
};
