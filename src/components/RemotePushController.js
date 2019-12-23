import React, { useEffect } from 'react'
import PushNotification from 'react-native-push-notification'
import PushNotificationIOS from "@react-native-community/push-notification-ios";

const RemotePushController = () => {
    useEffect(() => {
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function(token) {
                console.log('TOKEN:', token)
            },
// (required) Called when a remote or local notification is opened or received
            onNotification: function(notification) {

                    PushNotification.localNotification({
                        autoCancel: true,
                        bigText:
                            'This is local notification demo in React Native app. Only shown, when expanded.',
                        subText: 'Local Notification Demo',
                        title: 'Local Notification Title',
                        message: 'Expand me to see more',
                        vibrate: true,
                        vibration: 300,
                        playSound: true,
                        soundName: 'default',
                    })

                console.log('REMOTE NOTIFICATION ==>', notification)

                // notification.finish(PushNotificationIOS.FetchResult.NoData);
// process the notification here
            },
            // Android only: GCM or FCM Sender ID
            senderID: '533143347616',
            popInitialNotification: true,
            requestPermissions: true,

        })
    }, [])
    return null
}
export default RemotePushController
