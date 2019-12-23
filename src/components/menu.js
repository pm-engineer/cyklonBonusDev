import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text, TouchableOpacity, Platform
} from 'react-native';
import {Icon} from 'native-base';
import {reduxLogOut} from "../store/actions/auth.actions";
import {compose} from "redux";
import {connect} from "react-redux";
import {Actions} from 'react-native-router-flux';

class Menu extends Component{


    items = [
        {id: 1, action:Actions.main, icon:"md-qr-scanner", text:'QR Код'},
        {id: 2, action:Actions.profile, icon:"ios-paper", text:'Профіль'},
        {id: 3, action:Actions.myCars, icon:"ios-paper", text:'Моє авто'},
        {id: 4, action:Actions.orderHistory, icon:"ios-paper", text:'Історія замовлень'},
        {id: 5, action:(()=>this.props.reduxLogOut()), icon:"ios-paper", text:'Вийти'},
    ];
    renderMenu() {
        return this.items.map(item => {

            return (
                <View key={item.id}>
                    <View style={styles.line}/>
                    <TouchableOpacity  style={styles.item} onPress={item.action}>
                        <View style={styles.icon}>
                            <Icon name={item.icon} style={{ color:'yellow'}}/>
                        </View>
                        <Text style={styles.itemText}>{item.text}</Text>
                    </TouchableOpacity>
                </View>

            )
        })
    }

    render() {
      const {phone_number} = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.logoText}>Автоцентр "Циклон"</Text>
                <View style={{flexDirection:'row',marginLeft: 20}}>
                    <View style={{
                        justifyContent: 'flex-start',
                        marginLeft:10
                    }}>
                        <Text style={{fontSize:18, marginVertical: 10}} note>{phone_number}</Text>
                    </View>
                </View>

                {this.renderMenu()}

                <View style={styles.footer}>
                    <Text>Copyright @2019 doCode</Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor:'white',
        paddingTop: Platform.OS === 'ios' ? 100 : null
    },
    logo:{
        marginLeft: 20
    },
    logoText:{
        color:'rgba(71, 4, 115, 1)',
        fontSize: 24,
        paddingTop:30,
        marginLeft: 30,
        fontWeight:'bold'
    },
    item:{
        flexDirection: 'row',
        alignItems:'center',
        margin:20
    },
    item1:{

    },
    itemText:{
        fontSize: 16,
    },
    line:{
        borderBottomColor: '#cbc9cb',
        borderBottomWidth: 1,
        marginVertical:1
    },
    icon:{
        backgroundColor: '#470473',
        width:55,
        height:45,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:3,
        marginRight:20
    },
    footer:{
        alignItems: 'center',
        flex: 1,
        justifyContent:'flex-end',
        margin:35
    },


})

const mapStateToProps = (state) => {
    return {
        phone_number:state.profileReducer.userProfile.phone_number
    }
}

const mapDispatchToProps = {
    reduxLogOut
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Menu);
