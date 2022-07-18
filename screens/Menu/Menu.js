import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './Menu.Style'

const MenuData = [
    {
        id: "1",
        icon: "https://img.icons8.com/material-rounded/24/000000/home.png",
        text: "Home"
    },
    {
        id: "2",
        icon: "https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/000000/external-Cricket-stadiums-and-games-icongeek26-glyph-icongeek26.png",
        text: "Matches"
    },
    {
        id: "3",
        icon: "https://img.icons8.com/ios/50/000000/play-button-circled--v1.png",
        text: "Videos"
    },
    {
        id: "4",
        icon: "https://img.icons8.com/pix/32/000000/experimental-news-pix.png",
        text: "News"
    },
    {
        id: "5",
        icon: "https://img.icons8.com/external-inkubators-glyph-inkubators/25/000000/external-more-music-inkubators-glyph-inkubators.png",
        text: "More"
    },
]
const CricMenu = ({ item }) => {
    return (
        <>
            <View style={styles.menuItems}>
                <Image source={{ uri: item.icon }} style={styles.menuIcon} />
                <Text style={styles.menuText}>{item.text}</Text>
            </View>
        </>
    )
}
const Menu = () => {
    return (
        <View>
            <View style={styles.menu}>
                {
                    MenuData.map((item) => {
                        return (
                            <>
                                <CricMenu item={item} key={item.id} />
                            </>
                        )
                    })
                }

            </View>
        </View>
    )
}

export default Menu