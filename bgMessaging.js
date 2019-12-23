import firebase from "react-native-firebase"
// Optional flow type
import type { RemoteMessage } from "react-native-firebase"

export default async (message: RemoteMessage) => {
    const channel = new firebase.notifications.Android.Channel("test-channel", "Test Channel", firebase.notifications.Android.Importance.Max)
.setDescription("My apps test channel");
// Create the channel
    console.log(444);
    firebase.notifications().android.createChannel(channel);
    const notification = new firebase.notifications.Notification({
        show_in_foreground: true,
        sound: 'default'
    })
        .setNotificationId(message.messageId)
        .setTitle("message.data.title")
        .setBody("message.data.body")
        .setSound('default')
        .setDefaults([firebase.notifications.Android.Defaults.Vibrate])
        .setPriority(firebase.notifications.Android.Priority.High)
        .setSmallIcon('ic_launcher')
        .setVibrate([1000, 1000])
    notification
        .android.setChannelId("test-channel")
    .android.setSmallIcon("ic_launcher");
        firebase.notifications().displayNotification(notification);
        console.log("RemoteMessage", message);
        console.log("notification", notification);
        return Promise.resolve();
}
