import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './Updates.Style'
import CricUpdates from '../../JSON/CricUpdates.json'

const Post = ({ item }) => {
    return (
        <>
            <View style={styles.updateCart}>
                {/* Row1 */}
                <View>
                    <Text style={styles.titleText}>{item.row1}</Text>
                </View>


                {/* Row2 */}
                <View>
                    <Image source={{ uri: item.img }} style={styles.img} />
                </View>


                {/* Row3 */}
                <View>
                    <Text style={styles.description1}>
                        {item.row2}
                    </Text>
                    <Text style={styles.miniDescription}>
                        {item.row3}
                    </Text>
                </View>


                {/* Row4 */}
                <View>
                    <Text style={styles.description2}>
                        {item.row4}
                    </Text>
                </View>


                {/* Row5 */}
                <View>
                    <Text style={styles.description2}>
                        {item.row5}
                    </Text>
                </View>
            </View>
        </>
    )
}
const Updates = () => {
    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.id}
                data={CricUpdates}
                renderItem={Post}
            />
        </View>
    )
}

export default Updates