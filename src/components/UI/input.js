import PropTypes from "prop-types";
import React, {Component} from "react";
import {TextInput, StyleSheet} from "react-native";
import {color} from '../../appConfig/cssConfig'


const propTypes = {
    mapElement: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    label: PropTypes.string
};

const defaultProps = {
    mapElement: (n) => {},
    onSubmitEditing: () => {},
    onChangeText: () => {},
    value: "",
    placeholder: "",
    maxLength: 200,
    keyboardType: "default",
    secureTextEntry: false,
    label: ""
};

class Input extends Component<{}> {

    state = {
        value: ""
    }

    // componentDidMount() {
    //     this.setState({
    //         value: this.props.value
    //     });
    // }
    //isNumber = (n) =>  { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }

    onChangeText = (value) => {

            this.setState({
                value
            }, () => {
                this.props.onChangeText(value);
            })


    }

    render() {
        const {placeholder, secureTextEntry, keyboardType, maxLength, onSubmitEditing,style} = this.props;
        return (
                <TextInput
                    style={style}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholder={placeholder}
                    placeholderTextColor="rgba(255,255,255,0.8)"
                    selectionColor="#999999"
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    value={this.state.value}
                    onSubmitEditing={onSubmitEditing}
                    onChangeText={this.onChangeText} />
        );
    }
}

Input.defaultProps = defaultProps;

Input.propTypes = propTypes;

export default Input;


