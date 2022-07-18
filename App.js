import { View, Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import Header from './screens/Header/Header'
import Matches from './screens/LiveMatches/Matches'
import Unpack from './screens/Unpack/Unpack'
import Trending from './screens/Trending/Trending'
import Menu from './screens/Menu/Menu'
import Updates from './screens/CricUpdates/Updates'

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor='#239270' />
      <ScrollView showsVerticalScrollIndicator={false} style={
        { height: 700 }
      }>
        <Header />
        <Matches />
        <Unpack />
        <Trending />
        <Updates />
        <Trending />
      </ScrollView>
      <Menu />
    </View>
  )
}

export default App