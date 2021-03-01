import * as React from "react"
import { StyleSheet, View, Image } from "react-native"
import { useTheme } from "@react-navigation/native"

export function BigImage (props) {
  const { colors } = useTheme()
  return (
    <View style={style.container}>
      <Image
        style={style.image}
        source={require('../../assets/images/img.jpg')}
      />
    </View>
  )
}

BigImage.defaultProps = {
  langText: 'test.i18nTest'
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})
