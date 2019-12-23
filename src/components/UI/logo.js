import React, {Component} from 'react';
import {
    Image
} from 'react-native';


export default class Logo extends Component{
    render() {
        const {styles} = this.props
        return (
            <Image style={styles}

            source={require('../../images/logo_img2.png')}/>

        );
    }
}


