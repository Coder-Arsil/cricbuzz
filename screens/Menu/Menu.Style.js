import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    menu:{
    flexDirection:'row' ,
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:5
    },
    menuItems:{
        flexDirection:'column',
        alignItems:'center',
    },
    menuIcon:{
        height:25,
        width:25
    },
    menuText:{
        color:'black',
        fontSize:11
    }
})
export default styles