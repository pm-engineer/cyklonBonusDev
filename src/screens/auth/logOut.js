import React, {Component} from 'react';
import {reduxLogOut} from "../../store/actions/auth.actions";
import {connect} from "react-redux";
import {View} from 'react-native';

class LogOut extends Component{

componentDidMount() {
    this.props.reduxLogOut()
}

    render() {
    return(
        <View/>
    )
    }

}

const mapDispatchToProps = {
    // Action
    reduxLogOut
};

export default connect(null, mapDispatchToProps)(LogOut);

