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
    iconBorderColor:"rgba(rgba(0,0,0,.10)",
    iconSize: 24,

    smallButtonBgColor: '#FFFFFF',
    smallButtonIconColor: '#3c3c3c',
    smallButtonBorderColor: 'rgba(0,0,0,.10)',

    bigButtonBgColor: '#5C6BC0',
    bigButtonIconTextColor: '#FFFFFF',
    bigButtonTextSize: 18,
    bigButtonAndroidRippleColor: 'rgba(255,255,255,.10)',

    activeTabColor:"red"
  }
}

// DARK
export const myDarkTheme = {
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,

    containerBg: "#efefef",
    headerColor:"#404040",
    iconColor:"#3c3c3c",
    iconBgColor:"#0D0D0D",
    iconBorderColor:"rgba(255,255,255,.20)",
    iconSize: 24,

    smallButtonBgColor: '#0D0D0D',
    smallButtonIconColor: '#3c3c3c',
    smallButtonBorderColor: 'rgba(255,255,255,.20)',

    bigButtonBgColor: '#6E7CC7',
    bigButtonIconTextColor: '#0D0D0D',
    bigButtonTextSize: 18,
    bigButtonAndroidRippleColor: 'rgba(255,255,255,.20)',

    activeTabColor:"white"
  }
}
