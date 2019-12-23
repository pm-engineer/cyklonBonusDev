import {Dimensions, StyleSheet} from "react-native";
const {height, width} = Dimensions.get('window');

export const color = '#B143F9';

export const styles = StyleSheet.create(   {
    container: {
        backgroundColor:'rgb(98, 6, 159)',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:height
    },
    containerTextSign:{
        color:'white',
        fontSize:18,
        marginVertical:10,
        alignItems:'center',
    },
    textSign:{
        color:'white',
        fontSize:18,
    },
    textSignButton:{
        color:'white',
        fontSize:18,
        textDecorationLine:'underline',
        marginTop:10
    },
    button:{
        backgroundColor: 'rgba(71, 4, 115, 1)',
        borderRadius:25,
        width:width * 0.75,
        height:50,
        marginTop:25,
        paddingVertical:12

    },
    buttonText:{
        color:'white',
        textAlign: 'center',
        fontSize: 18,
    },
    errorText:{
        color:'yellow',
        fontSize: 14,
        paddingHorizontal:12
    },
    containerLogo:{
        marginTop:45,
        marginBottom:30

    },
    logoText:{
        color:'white',
        fontSize: 50,
        textAlign: 'center'
    },

    logoStyles:{
        height:100,
        width:145,
        resizeMode:'contain'
    },
    inputAuth:{
        width:width * 0.75,
        backgroundColor:color,
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:18,
        color:'white',
        height:50,
        marginVertical:10
    },
    inputPhone: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
        width:width * 0.5,
    },
    itemPhone:{
        flexDirection:'row',
        width:width * 0.75,
        backgroundColor:color,
        borderRadius:25,
        paddingLeft:16,
        fontSize:18,
        color:'white',
        height:50,
        alignItems:'center',
        marginVertical:10
    },
    textVerify:{
        color:'white',
        fontSize:18,
        textAlign: 'center',
        marginBottom: 30
    },
    titleRecover:{
        color:'white',
        fontSize:26,
        textAlign: 'center',
        marginBottom: 30
    }
})
