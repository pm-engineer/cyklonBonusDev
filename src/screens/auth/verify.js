import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {compose} from "redux";
import {connect} from "react-redux";
import InputText from "../../components/UI/input";
import {Actions} from 'react-native-router-flux'
import { Field, reduxForm } from 'redux-form'
import { reduxVerify, reduxSignIn} from "../../store/actions/auth.actions";
import {reduxFirstAddCar } from "../../store/actions/cars.actions";
import {styles} from "../../appConfig/cssConfig";

import {t} from "../../locales";

class Verify extends Component{


    onSubmit = async (values) => {
        const payload = {
            username: this.props.verifyName,
            code: values.code
        }
        await this.props.reduxVerify(payload)
        const payloadLogin = {
            phone: this.props.login,
            password: this.props.password
        }
        await this.props.reduxSignIn(payloadLogin)
        await this.props.reduxFirstAddCar(true)
    }

    renderTextInput = (field) => {
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;



        return (
            <View>
                <InputText
                    style={styles.inputAuth}
                    onChangeText={onChange}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    label={label}
                    {...restInput} />
                {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
    }

    render() {
        const { handleSubmit} = this.props;

        return (
            <View style={styles.container} >
                <View >
                    <Text style={styles.textVerify}>{t("please_enter_the_code_sent_to_your_number")}</Text>
                </View>

                <Field
                    name="code"
                    placeholder={t("confirmation_code")}
                    component={this.renderTextInput} />

                <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
                    <Text style={styles.buttonText}>{t("sign_up")}</Text>
                </TouchableOpacity>


                <View style={styles.containerTextSign}>
                    <Text style={styles.textSign} >{t("already_registered")}?</Text>
                    <Text onPress={Actions.signIn} style={styles.textSignButton} >{t("enter")}</Text>
                </View>

            </View>
        );
    }
}


const validate = values => {

    const errors = {};
    if (!values.code) {
        errors.code = t("verify_code_is_required");
    }

    return errors;

};

const mapStateToProps = (state) => {
    return {
        verifyName: state.authReducer.verifyName,
        password:state.authReducer.authPassword,
        login:state.authReducer.authLogin,
    }
}


const mapDispatchToProps = {
    // Action
    reduxVerify,
    reduxSignIn,
    reduxFirstAddCar
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "verify",
        validate
    })
)(Verify);

