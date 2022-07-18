import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    upper: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingBottom: 10
    },
    text: {
        fontSize: 12,
        color: 'black'
    },
    videoCart: {
        height: 170,
        width: 220,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 1.5,
        marginTop: 5,
        marginLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 5
    },
    vidImage: {
        height: "85%",
        width: "100%",
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    playBtn: {
        height: 40,
        width: 40,
        position: 'absolute',
        top: "35%",
        left: "40%"
    },
    vidFooter: {
        marginTop: -20
    },
    vidText: {
        color: 'black',
        fontSize: 10,
        paddingHorizontal: 5,
        marginTop: 1
    },
    vidTextTime: {
        fontSize: 9,
        paddingLeft: 5,
        marginTop: 5,
    }
})
export default styles