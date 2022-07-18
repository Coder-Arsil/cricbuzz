import { View, Text, Image } from 'react-native'
import React from 'react'
import './Header.Style.js'
import styles from './Header.Style.js'
const Header = () => {
  return (
    <View style={styles.headerData}>
      <Image source={require('../../assets/cricLogo.jpg')} style={styles.logo} />
      <Image source={require('../../assets/settings.png')} style={styles.settingsLogo} />
    </View>
  )
}

export default Header