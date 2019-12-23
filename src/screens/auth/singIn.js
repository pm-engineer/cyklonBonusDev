import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import Logo from '../../components/UI/logo'
import {Container, Content} from "native-base";
import {compose} from "redux";
import {connect} from "react-redux";
import {Actions} from 'react-native-router-flux'
import { Field, reduxForm } from 'redux-form'
import { reduxSignIn } from "../../store/actions/auth.actions";
import Input from "../../components/UI/input";
import Button from "../../components/UI/button";
import CountryPiker from "../../components/countryPiker";
import {styles} from "../../appConfig/cssConfig";

import {t} from "../../locales";

class SingIn extends Component{

    state = {
        countryCode: '+380'
    }

    onSubmit = async (values) => {
         values.phone =  this.state.countryCode + values.phone
         await this.props.reduxSignIn(values)
    }


    getValue = (value) => {

        this.setState(function (prevState) {
            return {
                countryCode: prevState.countryCode = value
            };
        });
    }
    renderPhoneInput = (field) => {
        const {meta: {touched, error}, maxLength, placeholder, input: {onChange, ...restInput}} = field;
        return (
            <View>
                <View style={styles.itemPhone}>
                    <CountryPiker
                        getValue={this.getValue}
                    />

                    <Input
                        style={styles.inputPhone}
                        onChangeText={onChange}
                        placeholder={placeholder}
                        keyboardType={"numeric"}
                        maxLength={maxLength}
                        {...restInput}
                    />
                </View>
                {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        )
    }

    renderTextInput = (field) => {
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange,...restInput}} = field;
        return (
            <View>
                <Input
                    style={styles.inputAuth}
                    onChangeText={onChange}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    label={label}
                    {...restInput}
                />
                {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
    }

    render() {
        const { handleSubmit, existCode} = this.props;
        return (
            <Container>
                <Content>
                    <View style={styles.container} >
                <View style={styles.containerLogo} >
                    <View style={{alignItems:'center'}}><Logo styles={styles.logoStyles}/></View>
                    <Text style={styles.logoText}>{t("cyklon")}</Text>
                </View>
                <View>
                    <Field
                        name="phone"
                        maxLength={9}
                        component={this.renderPhoneInput} />
                    <Field
                        name="password"
                        placeholder={t("password")}
                        secureTextEntry={true}
                        component={this.renderTextInput} />
                    <Button
                        onPress={handleSubmit(this.onSubmit)}
                        styleButton={styles.button}
                        stylesButtonText={styles.buttonText}
                        title={t("sign_in")}
                    />
                </View>

                {
                    existCode ?
                        ( <View style={styles.textSign}>
                            <Text style={styles.textSign_text} >{t("already_have_a_code")}?</Text>
                            <Text onPress={Actions.verify} style={styles.textSign_button} >{t("enter")}</Text>
                        </View>)
                        :
                        (<View style={styles.containerTextSign}>
                            <Text style={styles.textSign} >{t("do_not_have_account_yet")}?</Text>
                            <Text onPress={Actions.signUp} style={styles.textSignButton} >{t("sign_up")}</Text>
                            <Text onPress={Actions.resetPassword} style={styles.textSignButton} >{t("forgot_password")}</Text>
                        </View>)
                }
                    </View>
                </Content>
            </Container>
        );
    }
}


const validate = values => {

    const errors = {};
    if (!values.password) {
        errors.password = t("password_cannot_be_empty");
    }
    if (!values.phone) {
        errors.phone = t("phone_cannot_be_empty");
    } else if (values.phone && !/^(0|[1-9][0-9]{8})$/i.test(values.phone)) {
        errors.phone = t("enter_the_correct_phone_number");
    }
    return errors;
};

const mapDispatchToProps = {
    // ThankCreator
    reduxSignIn
};

const mapStateToProps = (state) => {
    return {
        existCode:state.authReducer.existCode
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "login",
        validate
    })
)(SingIn);



