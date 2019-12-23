import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import {Container, Content} from "native-base";
import Logo from '../../components/UI/logo'
import {Actions} from "react-native-router-flux";
import Input from "../../components/UI/input";
import {Field, reduxForm} from "redux-form";
import {reduxSignUp} from "../../store/actions/auth.actions";
import {compose} from "redux";
import {connect} from "react-redux";
import Button from "../../components/UI/button";
import CountryPiker from "../../components/countryPiker";
import {styles} from "../../appConfig/cssConfig";

import {t} from "../../locales";

class SignUp extends Component{

    state = {
        countryCode: '+380'
    }

    onSubmit = async (values) => {

        values.phone =  this.state.countryCode + values.phone
        await this.props.reduxSignUp(values)
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
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
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
                    {...restInput} />
                {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
    }



    render() {
        const { handleSubmit } = this.props;

        return (
            <Container>
                <Content>
                    <View style={styles.container}>
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
                        <Field
                            name="confirmPassword"
                            placeholder={t("confirm_password")}
                            secureTextEntry={true}
                            component={this.renderTextInput} />
                        <Button
                            onPress={handleSubmit(this.onSubmit)}
                            styleButton={styles.button}
                            stylesButtonText={styles.buttonText}
                            title={t("sign_up")}
                        />
                    </View>
                <View style={styles.containerTextSign}>
                    <Text style={styles.textSign} >{t("already_registered")}?</Text>
                    <Text onPress={Actions.signIn} style={styles.textSignButton} >{t("enter")}</Text>
                </View>
                    </View>
                </Content>
            </Container>
        );
    }
}


const validate = values => {
    const errors = {};
    if (!values.phone) {
        errors.phone = t("phone_cannot_be_empty");
    } else if (values.phone && !/^(0|[1-9][0-9]{8})$/i.test(values.phone)) {
        errors.phone = t("enter_the_correct_phone_number");
    }
    if (!values.password) {
        errors.password = t("password_cannot_be_empty");
    }
    if (!values.confirmPassword ) {
        errors.confirmPassword = t("confirm_password");;
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = t("password_does_not_match");
    }
    return errors;
};

const mapStateToProps = (state) => {
    return {
        userConfirmed:state.commonReducer.userConfirmed
    }
}

const mapDispatchToProps = {
    // Action
    reduxSignUp
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "signUp",
        validate
    })
)(SignUp);

