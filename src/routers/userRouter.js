import React, {Component} from 'react';
import {Icon} from 'native-base';
import {Router, Stack, Scene, Lightbox, Modal} from 'react-native-router-flux';
import Menu from '../components/menu'
import Main from '../screens/user/main'
import OrderHistory from '../screens/user/orderHistory'
import MyCars from '../screens/user/myCars'
import MyCar from '../screens/user/myCar'
import AddCar from '../screens/user/addCar'
import Profile from '../screens/user/profile'
import ModalMessage from "../components/modalMessage";


export default class UserRouter extends Component{



    render() {
        const iconDrawer = (
            <Icon style={{marginLeft: 10}} name='menu'  />

        )

        return(
            <Router>
                <Scene  drawer
                        key="main"
                        contentComponent={Menu}
                        drawerPosition={'left'}
                        drawerWidth={300}
                        drawerIcon={iconDrawer}
                        rightButtonImage={iconDrawer}
                    // onExit={() => {
                    //     console.log('Drawer closed');
                    // }}
                    // onEnter={() => {
                    //     console.log('Drawer opened');
                    // }}
                >
                <Scene modal hideNavBar>
                    <Lightbox>
                        <Stack key="main2">
                            <Scene key="main" title="Бонус"  component={Main}   initial={true}/>
                            <Scene key="profile" title="Профіль"  component={Profile}  />
                            <Scene key="myCars" title="Список авто"  component={MyCars}  />
                            <Scene key="myCar"  back title="Авто" backTitle='back' component={MyCar}  />
                            <Scene key="addCar" back title="Додати машину"  component={AddCar} />
                            <Scene key="orderHistory" title="Історія замовлень"  component={OrderHistory}  />
                        </Stack>
                        <Scene key="modalMessage"  component={ModalMessage} />
                    </Lightbox>
                </Scene>
                </Scene>


            </Router >
        )
    }
}
