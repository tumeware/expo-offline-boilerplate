import { DefaultTheme, DarkTheme } from '@react-navigation/native'

// LIGHT
export const myDefaultTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,

    containerBg: "#efefef",
    headerColor:"white",
    iconColor:"#3c3c3c",
    iconBgColor:"#ffffff",
    iconBorderColor:"rgba(rgba(0,0,0,.30)",
    iconSize: 24,

    smallButtonBgColor: '#FFFFFF',
    smallButtonIconColor: '#3c3c3c',
    smallButtonBorderColor: 'rgba(0,0,0,.20)',

    bigButtonBgColor: '#5C6BC0',
    bigButtonIconTextColor: '#FFFFFF',
    bigButtonTextSize: 18,
    bigButtonAndroidRippleColor: 'rgba(255,255,255,.20)',

    activeTabColor:"red"
  }
}

// DARK
export const myDarkTheme = {
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,

    containerBg: "#4c4c4c",
    headerColor:"#404040",
    iconColor:"#3c3c3c",
    iconBgColor:"#3c3c3c",
    iconBorderColor:"#3c3c3c",
    iconSize: 24,

    smallButtonBgColor: '#3c3c3c',
    smallButtonIconColor: '#aaaaaa',
    smallButtonBorderColor: 'rgba(255,255,255,.20)',

    bigButtonBgColor: '#3c3c3c',
    bigButtonIconTextColor: '#aaaaaa',
    bigButtonTextSize: 18,
    bigButtonAndroidRippleColor: 'rgba(255,255,255,.20)',

    activeTabColor:"white"
  }
}
