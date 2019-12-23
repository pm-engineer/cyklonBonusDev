import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Icon } from 'native-base'
import { Overlay } from 'react-native-elements/src/index';
import {reduxClearMassages } from "../store/actions/common.actions";
import {connect} from "react-redux";
import {compose} from "redux";
import {Actions} from "react-native-router-flux";

 class ModalMessage extends Component{

    state={
        overlayInit:false,
    }


    componentDidMount(){
        this.setState({ overlayInit: true})
        setTimeout(() => this.close(), 1000);
    }

     close = async () =>{
         this.setState({ overlayInit: false })
          await this.props.reduxClearMassages()
         Actions.pop()
     }

    showMessage = (value) => {

        if(value === 'success'){
            return   <Icon style={styles.iconSuccess} name='checkmark-circle-outline'/>
        } else if(value === 'UserNotFoundException'){
            return  (
                <View style={styles.iconContainer}>
                    <Icon  style={styles.iconError} name='information-circle-outline' />
                    <Text style={{ fontSize:18}}>Такого користувача не існує</Text>
                </View>)
        }else if(value === 'NotAuthorizedException'){
            return  (
                <View style={styles.iconContainer}>
                    <Icon  style={styles.iconError} name='information-circle-outline'/>
                    <Text style={{fontSize:18,textAlign:'center', margin:10}}>Неправильний номер{'\n'} телефону або пароль</Text>
                </View>)
        }else if(value === 'UsernameExistsException'){
            return  (
                <View style={styles.iconContainer}>
                    <Icon  style={styles.iconError} name='information-circle-outline'/>
                    <Text style={{fontSize:18,textAlign:'center', margin:10}}>Користувач з таки телефоном{'\n'} вже існує</Text>
                </View>)
        } else {
            return  (
                <View style={styles.iconContainer}>
                    <Icon  style={styles.iconError} name='information-circle-outline'/>
                    <Text style={{ fontSize:18,textAlign:'center'}}>Помилка</Text>
                </View>)
        }
    }

    render() {

        const {data} = this.props;
        return(
                <Overlay
                    isVisible={this.state.overlayInit}
                    windowBackgroundColor="rgba(0, 0, 0, .6)"
                    overlayBackgroundColor="white"
                    overlayStyle={{justifyContent:'center'}}
                    width="auto"
                    height="auto">
                    <View>
                        { data ? this.showMessage(data):null}
                    </View>
                </Overlay>
        )
    }
}

const mapDispatchToProps = {
    reduxClearMassages
};

const mapStateToProps = (state) => {
    return {
        modalMessage: state.commonReducer.modalMessage,
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(ModalMessage);


const styles = StyleSheet.create({
    iconContainer:{
        justifyContent: 'center',
        alignItems:'center',
    },
    iconSuccess:{
        color: '#00ff1c',
        fontSize:100,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:3,
        margin:20
    },
    iconError:{
        color: '#ff0015',
        fontSize:100,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:3,
        margin:20
    }
})
