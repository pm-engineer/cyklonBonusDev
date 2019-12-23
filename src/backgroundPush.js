import firebase from 'react-native-firebase';

export default async (message) => {
    try {
        const text = message.data.message;
        const payload = JSON.parse(message.data.sendbird);
        const localNotification = new firebase.notifications.Notification({
            show_in_foreground: true,
            sound: 'default'
        })
            .android.setChannelId('test-channel')
            .android.setVibrate([1000, 1000])
            .android.setDefaults([firebase.notifications.Android.Defaults.Vibrate])
            .android.setPriority(firebase.notifications.Android.Priority.High)
            .android.setSmallIcon('ic_launcher')
            .android.setVibrate(1000)
            .setNotificationId(message.messageId)
            .setTitle(payload.sender.name)
            .setSubtitle(`Belum dibaca: ${payload.unread_message_count}`)
            .setBody(text)
            .setData(payload)
            .setSound('default');
        return firebase.notifications().displayNotification(localNotification);
    } catch (e) {
        return Promise.resolve();
    }
}
