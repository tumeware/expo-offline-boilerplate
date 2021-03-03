import * as React from "react"
import { Pressable, StyleSheet, Text } from "react-native"
import {AppLoading} from 'expo-app-loading'
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue'
import { useTheme } from "@react-navigation/native"
import { Feather } from '@expo/vector-icons'
import i18n from 'i18n-js'
import { CustomText } from '../text/text'

export function TextButton (props) {
  const { colors } = useTheme()

  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  })

  if (!fontsLoaded) {
    //return <AppLoading />;
    return null;
  } else {
    return (
      <Pressable
        hitSlop={20}
        android_ripple={{color: colors.bigButtonAndroidRippleColor}}
        onPress={props.onPress}
        style={[style.buttonContainer, {backgroundColor: colors.bigButtonBgColor, color: colors.bigButtonIconTextColor, width: props.buttonWidth}]}
      >
        <Feather
          name={props.iconName}
          size={colors.iconSize}
          color={colors.bigButtonIconTextColor}
          style={style.iconContainer}
        />
        {/*
        <Text
          AccessibilityRole="imagebutton"
          adjustsFontSizeToFit
          nativeID="bigButton"
          testID="bigButtonTest"
          style={[styles.textContainer, { fontFamily: 'BebasNeue_400Regular',   color: colors.bigButtonIconTextColor, fontSize: colors.bigButtonTextSize }]}>
            {i18n.t(props.langText)}
        </Text>
        */}
        <CustomText
          title
          nativeID="customText"
          testID="customTextTest"
          langText="test.i18nTest"
          size={colors.bigButtonTextSize}
          color={colors.bigButtonIconTextColor}
          style={style.textContainer}
        />
      </Pressable>
    );
  }
}

TextButton.defaultProps = {
  iconName: 'home',
  langText: 'test.i18nTest',
  buttonWidth: null
}

const style = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    height: 60,
  },
  iconContainer: {
    textAlign: 'center',
    width: '30%',
    height: 60,
    lineHeight: 60,
  },
  textContainer: {
    textAlign: 'center',
    width: '70%',
    height: 60,
    lineHeight: 60,
  }
})
