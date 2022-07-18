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
    cart: {
        paddingTop: 5,
        width: 300,
        marginTop: 5,
        marginLeft: 15,
        borderRadius: 5,
        backgroundColor: '#fff',
        elevation: 1.5,
        borderBottomWidth: 0.7,
        borderBottomColor: '#ccc',
    },
    text1Row: {
        color: 'grey',
        fontSize: 10,
        marginLeft: 15
    },
    flag: {
        height: 20,
        width: 25,
        borderWidth: 1,
        borderColor: '#ccc',
        marginLeft: 15
    },
    teams: {
        flexDirection: 'row',
        paddingRight: 80,
        marginTop: 15
    },
    score: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingLeft: 5
    },
    secondTeam: {
        color: 'black'
    },
    winningTeam: {
        color: '#3b97d9',
        fontSize: 12
    },
    LiveTeams: {
        color: 'red',
        fontSize: 12
    },
    result: {
        paddingVertical: 10,
        marginLeft: 15
    },
    scheduleBox: {
        backgroundColor: '#e8e9eb',
        paddingVertical: 15,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: 'flex-end',
        paddingRight: 15,
        justifyContent: 'center',
        elevation: 1.5
    },
    scheduleText: {
        fontSize: 11
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