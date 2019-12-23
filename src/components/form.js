
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,

} from 'react-native';



export default class Form extends Component{
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Email'
                    placeholderTextColor="white"
                    style={styles.inputBox}
                />
                <TextInput
                    placeholder='Password'
                    placeholderTextColor="white"
                    style={styles.inputBox}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.button_text}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    inputBox:{
        width:300,
        backgroundColor:'#195244',
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:18,
        color:'white',
        height:50,
        marginVertical:10
    },
    button:{
        backgroundColor: '#0c372c',
        borderRadius:25,
        width: 300,
        height:50,
        marginVertical:25,
        paddingVertical:12

    },
    button_text:{
        color:'white',
        textAlign: 'center',
        fontSize: 18,
    }
})
