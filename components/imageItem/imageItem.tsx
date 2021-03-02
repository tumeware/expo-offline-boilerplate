import * as React from "react"
import { Pressable, StyleSheet, Image, View } from "react-native"
import { useTheme } from "@react-navigation/native"
import i18n from 'i18n-js'
import { CustomText } from '../text/text'

export function ImageItem (props) {
  const { colors } = useTheme()
  return (
    <Pressable
      {...props}
      hitSlop={20}
      android_ripple={{color: colors.imageItemAndroidRippleColor}}
      onPress={props.onPress}
      style={[style.container, {backgroundColor: colors.imageItemBg, width: props.width}]}
    >
      <View style={style.imageContainer}>
        <Image
          {...props}
          resizeMethod="scale"
          resizeMode="cover"
          style={style.image}
        />
      </View>
      <CustomText
        title
        langText="test.i18nTest"
        size={colors.bigButtonTextSize}
        color={colors.imageItemTxt}
        style={style.textStyle}
        containerStyle={style.middleContainer}
      />
      <CustomText
        title
        langText="test.i18nTest"
        size={colors.bigButtonTextSize}
        color={colors.imageItemTxt}
        style={style.textStyle}
        containerStyle={[style.middleContainer, style.rightContainer]}
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
    //borderWidth: 2,
  },
  imageContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '25%',
    height: 60,
    marginRight: '0%',
  },
  image: {
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  middleContainer: {
    textAlign: 'left',
    width: '45%',
    height: 60,
  },
  rightContainer: {
    textAlign: 'right',
    width: '30%',
  },
  textStyle: {
    height: 60,
    lineHeight: 60,
  }
});
