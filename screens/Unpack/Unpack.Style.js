import { StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    outerBox:{
        backgroundColor:'#2DB389',
        width:"90%",
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    cricUnpack:{
        height:40,
        width:100,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
    },
    setupBox:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10
    },
    textAd:{
        color:'white',
        fontSize:12,
        fontWeight:'bold',
        marginLeft:10
    },
    arrow:{
        height:20,
        width:20,
        marginLeft:20
    }
})
export default styles