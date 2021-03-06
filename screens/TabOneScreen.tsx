import * as React from 'react'
import { StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { DarkModeAction } from '../theme/colors.action'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { TextButton, IconButton, CustomText, BigImage, ImageItem } from '../components'

export default function TabOneScreen(props) {
  const dispatch = useDispatch()
  const reduxTest = useSelector(state => state.reduxTest.reduxTest)
  const darkMode = useSelector(state => state.darkMode.darkMode)

  return (
    <View style={styles.container}>

    <BigImage testID="bigImageTest" source={darkMode ? require('../assets/images/img.jpg') : require('../assets/images/imgL.jpg')} />

    <ImageItem width={275} testID="imageItemTest" source={require('../assets/images/img.jpg')} />

      <TextButton langText="homeScreen.bigButton" iconName="plus" iconColor="#C7C024" buttonWidth={150} onPress={() => dispatch(DarkModeAction(true ? !darkMode : darkMode))} />

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
