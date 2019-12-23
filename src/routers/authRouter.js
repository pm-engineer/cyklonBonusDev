import React, {Component} from 'react';

import {Router, Stack, Scene, Lightbox} from "react-native-router-flux";
import SingIn from '../screens/auth/singIn'
import SignUp from '../screens/auth/signUp'
import ResetPassword from '../screens/auth/resetPassword'
import Verify from '../screens/auth/verify'
import ModalMessage from "../components/modalMessage";


class AuthRouter extends Component{
    render() {

        return (
            <Router>
                <Scene modal hideNavBar>
                    <Lightbox>
                        <Stack key="root">
                            <Scene key="signIn" component={SingIn} hideNavBar={true} initial={true} />
                            <Scene key="signUp" component={SignUp} hideNavBar={true} />
                            <Scene key="verify" component={Verify} hideNavBar={true} />
                            <Scene key="resetPassword" component={ResetPassword} hideNavBar={true}  />
                        </Stack>
                        <Scene key="modalMessage"  component={ModalMessage} />
                    </Lightbox>
                </Scene>
            </Router>
        );
    }
}

export default AuthRouter




