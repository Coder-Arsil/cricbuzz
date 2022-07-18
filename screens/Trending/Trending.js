import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import styles from './Trending.Style'
import VideoCartData from '../../JSON/Trending.json'
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
const Trending = () => {
    return (
        <View>
            <View style={styles.upper}>
                <Text style={styles.text}>Trending</Text>
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

export default Trending