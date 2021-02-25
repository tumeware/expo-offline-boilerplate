import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import i18n from 'i18n-js';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextButton } from '../components';

export default function TabOneScreen(props) {
  const dispatch = useDispatch()
  const reduxTest = useSelector(state => state.reduxTest.reduxTest)

  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>{reduxTest}</Text>
      <Text style={styles.title}>{i18n.t("test.i18nTest")}</Text>

      <TextButton langText="homeScreen.bigButton" iconName="plus" iconColor="#C7C024" buttonWidth={150} />

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
