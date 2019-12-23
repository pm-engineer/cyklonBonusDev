import React from "react";
import {Text, TouchableOpacity} from "react-native";


export default Button = (props) =>  {
        const {onPress,styleButton,stylesButtonText,title} = props;
        return (
            <TouchableOpacity style={styleButton} onPress={onPress}>
                <Text style={stylesButtonText}>{title}</Text>
            </TouchableOpacity>
        );

}

