import * as React from "react"
import { Pressable, StyleSheet, Image, Dimensions } from "react-native"
import { useTheme } from "@react-navigation/native"
import i18n from 'i18n-js'
import { CustomText } from '../text/text'

export function ImageItem (props) {
  const { colors } = useTheme()
  return (
    <Pressable
      hitSlop={20}
      android_ripple={{color: colors.imageItemAndroidRippleColor}}
      onPress={props.onPress}
      style={[style.container, {backgroundColor: colors.imageItemBg, color: colors.imageItemTxt, width: props.buttonWidth}]}
    >
      <Image
        {...props}
        resizeMethod="scale"
        resizeMode="cover"
        style={style.imageContainer}
      />
      <CustomText
        title
        nativeID="customText"
        testID="customTextTest"
        langText="test.i18nTest"
        size={colors.bigButtonTextSize}
        color={colors.imageItemTxt}
        style={style.middleContainer}
      />
      <CustomText
        title
        nativeID="customText"
        testID="customTextTest"
        langText="test.i18nTest"
        size={colors.bigButtonTextSize}
        color={colors.imageItemTxt}
        style={[style.middleContainer, style.rightContainer]}
      />
    </Pressable>
  )
}

ImageItem.defaultProps = {
  iconName: 'home',
  langText: 'test.i18nTest',
  buttonWidth: null
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  imageContainer: {
    textAlign: 'center',
    width: Dimensions.get('window').width / 4,
    height: 60,
    lineHeight: 60,
  },
  middleContainer: {
    textAlign: 'left',
    width: Dimensions.get('window').width / 2,
    height: 60,
    lineHeight: 60,
  },
  rightContainer: {
    textAlign: 'right',
    width: '30%',
  },
  imageContainer: {
    width: Dimensions.get('window').width / 4,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 50,
    width: 60,
    height: 60,
    marginRight: 20,
  },
});
