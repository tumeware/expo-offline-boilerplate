import * as React from "react"
import { StyleSheet, View, Image, Dimensions } from "react-native"
import { useTheme } from "@react-navigation/native"


export function BigImage (props) {
  const { colors } = useTheme()
  return (
    <View style={style.container}>
      <Image
        {...props}
        resizeMethod="scale"
        resizeMode="cover"
        style={style.image}
      />
    </View>
  )
}

BigImage.defaultProps = {
  langText: 'test.i18nTest'
};

const style = StyleSheet.create({
  container: {
    //flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  }
})
