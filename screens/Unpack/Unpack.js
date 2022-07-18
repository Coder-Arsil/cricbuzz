import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './Unpack.Style'

const Unpack = () => {
    return (
        <View style={styles.setupBox}>
            <View style={styles.outerBox}>
                <Image source={{ uri: 'https://modyolo.com/wp-content/uploads/2022/01/cricbuzz-live-cricket-scores-news-1.jpg' }} style={styles.cricUnpack} />
                <Text style={styles.textAd}>Unlock ads-free & exclusive content</Text>
                <Image source={require('../../assets/arrow.png')} style={styles.arrow} />
            </View>
        </View>
    )
}

export default Unpack