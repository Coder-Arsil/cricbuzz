import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './Matches.Style'
import MatchData from '../../JSON/Carousel.json'
import VideoCartData from '../../JSON/VideoCart.json'

const VideoCart = ({ item, LastIndex }) => {
  return (
    <>
      <View style={[styles.videoCart, { marginRight: LastIndex }]}>
        <View>
          <Image source={{ uri: item.img }} style={styles.vidImage} />
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/play-button-circled--v1.png"' }} style={styles.playBtn} />
        </View>
        <View style={styles.vidFooter}>
          <Text style={styles.vidText}>{item.content}</Text>
          <Text style={styles.vidTextTime}>{item.time}</Text>
        </View>
      </View>
    </>
  )
}
const All_Matches = ({ item, LastIndex }) => {
  return (
    <>
      { }
      <View style={[styles.cart, { marginRight: LastIndex }]}>
        {/* row1 */}
        <View>
          <Text style={styles.text1Row}>{item.tour}</Text>
        </View>

        {/* row2 */}
        <View>
          <View style={styles.teams}>
            <Image source={{ uri: item.team1Flag }} style={styles.flag} />
            <View style={styles.score}>
              <Text>{item.team1}</Text>
              <Text>{item.team1Score}</Text>
            </View>
          </View>
          <View style={styles.teams}>
            <Image source={{ uri: item.team2Flag }} style={styles.flag} />
            <View style={styles.score}>
              <Text style={styles.secondTeam}>{item.team2}</Text>
              <Text style={styles.secondTeam}>{item.team2Score}</Text>
            </View>
          </View>
        </View>

        {/* row3 */}
        <View style={styles.result}>
          {
            item.status === 'end' ?
              <Text style={styles.winningTeam}>{item.result}</Text> :
              <Text style={styles.LiveTeams}>{item.result}</Text>
          }

        </View>

        {/* row4 */}
        <View style={styles.scheduleBox}>
          <Text style={styles.scheduleText}>SCHEDULE</Text>
        </View>
      </View>
    </>
  )
}
const CartData = ({ item }) => {
  return (
    <>
      {
        item.id !== "5" ?
          <All_Matches item={item} LastIndex={0} /> :
          <All_Matches item={item} LastIndex={15} />
      }

    </>
  )
}
const videoData = ({ item }) => {
  return (
    <>
      {
        item.id !== "5" ?
          <VideoCart item={item} LastIndex={0} /> :
          <VideoCart item={item} LastIndex={15} />
      }
    </>
  )
}
const Matches = () => {
  return (
    <View>
      <View style={styles.upper}>
        <Text style={styles.text}>CURRENT MATCHES</Text>
      </View>
      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={MatchData}
          renderItem={CartData}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.upper}>
        <Text style={styles.text}>Featured Videos</Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={VideoCartData}
        renderItem={videoData}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Matches