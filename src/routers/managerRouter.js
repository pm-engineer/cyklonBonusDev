import React, {Component} from 'react';
import {Router,Scene} from 'react-native-router-flux';
import {Text, StyleSheet} from "react-native";
import Services from '../screens/manager/services'
import ManagerHistory from '../screens/manager/managerHistory'
import ManagerCodeQR from '../screens/manager/managerCodeQR';
import LogOut from '../screens/auth/logOut';



export default class NavigationManager extends Component{


    render() {
        const TabIcon = ({ selected, title }) => {
            return (
                <Text style={{color:'black'}}>{title}</Text>
            );
        }

        return(
            <Router>
                <Scene>
                    <Scene
                        key="tabBar"
                        tabs={true}
                        swipeEnabled={true}
                        tabBarStyle={styles.tabBarStyle}
                        hideNavBar
                        activeBackgroundColor={'#f1eff1'}
                        activeTintColor={'#000000'}
                        labelStyle={styles.item}
                    >
                        <Scene key="services" component={Services} title="ПОСЛУГИ" />
                        <Scene key="managerHistory" component={ManagerHistory} title="ІСТОРІЯ" />
                        <Scene key="logOut"  component={LogOut} title="ВИЙТИ" />
                    </Scene>
                    <Scene
                        hideNavBar
                        key="scannerCodeQR" component={ManagerCodeQR} title="ScannerCodeQR" />
                </Scene>
            </Router>
        )
    }
}
const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#FFFFFF',

    },
    item:{
        justifyContent:"center",
        fontSize: 20,
        marginBottom:10
    }


})
