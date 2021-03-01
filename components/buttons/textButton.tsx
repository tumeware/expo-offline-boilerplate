import * as React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import {AppLoading} from 'expo-app-loading';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { useTheme } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import i18n from 'i18n-js';
import { CustomText } from '../text/text'

export function TextButton (props) {
  const { colors } = useTheme()

  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontsLoaded) {
    //return <AppLoading />;
    return null;
  } else {
    return (
      <Pressable
        hitSlop={20}
        android_ripple={{color: colors.bigButtonAndroidRippleColor}}
        onPress={props.onPress}
        style={[styles.buttonContainer, {backgroundColor: colors.bigButtonBgColor, color: colors.bigButtonIconTextColor, width: props.buttonWidth}]}
      >
        <Feather
          name={props.iconName}
          size={colors.iconSize}
          color={colors.bigButtonIconTextColor}
          style={styles.iconContainer}
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
        />
      </Pressable>
    );
  }
};

TextButton.defaultProps = {
  iconName: 'home',
  langText: 'common.lorem',
  buttonWidth: null
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    height: 60
  },
  iconContainer: {
    textAlign: 'center',
    width: '30%',
    height: 60,
    lineHeight: 60
  },
  textContainer: {
    textAlign: 'center',
    width: '70%',
    height: 60,
    lineHeight: 60
  }
});
