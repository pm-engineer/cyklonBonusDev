import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import {Container, Content} from "native-base";
import {Actions} from "react-native-router-flux";
import Input from "../../components/UI/input";
import {Field, reduxForm} from "redux-form";
import {reduxResetPassword,reduxSentCode} from "../../store/actions/auth.actions";
import {compose} from "redux";
import {connect} from "react-redux";
import Button from "../../components/UI/button";
import CountryPiker from "../../components/countryPiker";
import {styles} from "../../appConfig/cssConfig";

import {t} from "../../locales";

class ResetPassword extends Component{

    state = {
        countryCode: '+380'
    }

    onSubmit = async (values) => {

        values.phone =  this.state.countryCode + values.phone
        await this.props.reduxSentCode(values)

    }

    onReset = async (values) => {

        await this.props.reduxResetPassword(this.props.username, values.code, values.password )

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
        const { handleSubmit,sent } = this.props;

        return (
            <Container>
                <Content>
                    <View style={styles.container}>
                        <View >
                            <Text style={styles.titleRecover}>{t("recover_password")}</Text>
                        </View>
                        <View>

                            { !sent ? (
                                <Field
                                    name="phone"
                                    maxLength={9}
                                    component={this.renderPhoneInput} />
                            ):(
                                <>
                                    <Field
                                        name="code"
                                        placeholder={t("confirmation_code")}
                                        component={this.renderTextInput} />
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
                                </>
                            )}

                            { !sent ? (
                                <Button
                                    onPress={handleSubmit(this.onSubmit)}
                                    styleButton={styles.button}
                                    stylesButtonText={styles.buttonText}
                                    title={t("recover")}
                                />
                            ):(
                                <Button
                                    onPress={handleSubmit(this.onReset)}
                                    styleButton={styles.button}
                                    stylesButtonText={styles.buttonText}
                                    title={t("save")}
                                />
                            )}

                        </View>
                        <View style={styles.containerTextSign}>
                            <Text onPress={Actions.signIn} style={styles.textSignButton} >{t("sign_in")}</Text>
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
    }
}

const mapDispatchToProps = {
    // Action
    reduxResetPassword,
    reduxSentCode
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "resetPassword",
        validate
    })
)(ResetPassword);








// import React, {Component} from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     TouchableOpacity
// } from 'react-native';
// import Logo from '../../components/UI/logo'
// import {compose} from "redux";
// import {connect} from "react-redux";
// import InputText from "../../components/UI/input";
// import {Actions} from 'react-native-router-flux'
// import { Field, reduxForm } from 'redux-form'
// import { reduxSignIn } from "../../store/actions/auth.actions";
//
// class ResetPassword extends Component{
//
//
//     onSubmit = async (values) => {
//         await this.props.reduxLogin(values)
//     }
//
//     renderTextInput = (field) => {
//         const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
//         return (
//             <View>
//                 <InputText
//                     onChangeText={onChange}
//                     maxLength={maxLength}
//                     placeholder={placeholder}
//                     keyboardType={keyboardType}
//                     secureTextEntry={secureTextEntry}
//                     label={label}
//                     {...restInput} />
//                 {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
//             </View>
//         );
//     }
//
//     render() {
//         const { handleSubmit} = this.props;
//         const logoStyles = {
//             height:100,
//             width:100,
//             marginVertical:100
//         }
//         return (
//             <View style={styles.container} >
//                 <Logo logoStyles={logoStyles}/>
//                 {/*<Form type="Login"/>*/}
//                 <Field
//                     name="email"
//                     placeholder="Email"
//                     component={this.renderTextInput} />
//                 <Field
//                     name="password"
//                     placeholder="Password"
//                     secureTextEntry={true}
//                     component={this.renderTextInput} />
//
//                 <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
//                     <Text style={styles.button_text}>Login</Text>
//                 </TouchableOpacity>
//
//                 <View style={styles.textSign}>
//                     <Text style={styles.textSign_text} >Do not have account yet?</Text>
//                     <Text onPress={Actions.signup} style={styles.textSign_button} > Sign Up</Text>
//                 </View>
//             </View>
//         );
//     }
// }
//
//
// const mapDispatchToProps = {
//     // Action
//     reduxSignIn
// };
//
// export default compose(
//     connect(null, mapDispatchToProps),
//     reduxForm({
//         form: "reset",
//     })
// )(ResetPassword);
//
//
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor:'#0cc697',
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     textSign:{
//         color:'white',
//         fontSize:18,
//         justifyContent: 'center',
//         flexGrow:1,
//         alignItems: 'flex-start',
//         flexDirection:'row',
//         marginVertical:45
//     },
//     textSign_text:{
//         color:'white',
//         fontSize:18,
//     },
//     textSign_button:{
//         color:'white',
//         fontSize:18,
//         textDecorationLine:'underline'
//     },
//     button:{
//         backgroundColor: '#0c372c',
//         borderRadius:25,
//         width: 300,
//         height:50,
//         marginVertical:25,
//         paddingVertical:12
//
//     },
//     button_text:{
//         color:'white',
//         textAlign: 'center',
//         fontSize: 18,
//     }
// })
