import React, {Component} from 'react';
import { Provider } from 'react-redux'
import {persistor,store} from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import * as RNLocalize from "react-native-localize";
import {setI18nConfig} from "./src/locales";
import Main from './src/screens/main'
import AsyncStorage from '@react-native-community/async-storage';
// import RemotePushController from './src/components/RemotePushController'
// import PushNotification from 'react-native-push-notification'
import firebase from 'react-native-firebase';


export default class App extends Component{



    getToken = async () => {
        let fcmToken = await AsyncStorage.getItem('fcmToken');
        console.log('AsyncStorage_tok',fcmToken);
        if (!fcmToken) {
            fcmToken = await firebase.messaging().getToken();
            console.log('fcmToken',fcmToken);
            if (fcmToken) {
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        }
    };

    checkPermission = async () => {
        const enabled = await firebase.messaging().hasPermission();
        console.log('hasPermission',enabled);
        this.requestPermission();
        if (enabled) {
            this.getToken();
        } else {
            this.requestPermission();
        }
    };

    requestPermission = async () => {
        try {
            await firebase.messaging().requestPermission();
            this.getToken();
        } catch (error) {
            console.log('permission rejected');
        }
    };

    createNotificationListeners = () => {
        this.onUnsubscribeNotificaitonListener = firebase
            .notifications()
            .onNotification(notification => {
                console.log('notification',notification)
                // notification
                    .android.setChannelId('test-channel')
                    .android.setSmallIcon('ic_launcher')
                    .android.setVibrate([1000, 1000, 1000])
                    .android.setPriority('urgent')
                //     .setSound('default')
                firebase.notifications().displayNotification(notification);
            });
    };

    removeNotificationListeners = () => {
        this.onUnsubscribeNotificaitonListener();
    };

    constructor(props) {
        super(props);
        setI18nConfig(); // set initial config
    }



    componentDidMount = async() => {

        firebase.messaging().subscribeToTopic("test");
        // Build a channel
        const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.High)
            .setVibrationPattern([500]) .setDescription('All Notifications')

        // Create the channel
        firebase.notifications().android.createChannel(channel);
        this.checkPermission();
        this.createNotificationListeners();
        setI18nConfig();
        RNLocalize.addEventListener("change", this.handleLocalizationChange);
    }

    componentWillUnmount() {
        RNLocalize.removeEventListener("change", this.handleLocalizationChange);
        this.removeNotificationListeners();
    }

    handleLocalizationChange = () => {
        setI18nConfig();
        this.forceUpdate();
    };
  render() {
    console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
    console.disableYellowBox = true;
    return (
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

          <Main/>
        </PersistGate>
      </Provider>

    );
  }
}

