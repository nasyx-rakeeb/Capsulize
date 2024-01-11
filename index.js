import { registerRootComponent } from "expo";
import App from "./App";
import messaging from "@react-native-firebase/messaging";
import notifee, { EventType } from "@notifee/react-native";
import {
  handleNotificationReceived,
  handleClickedNotitfication,
} from "./others/utils";

messaging().setBackgroundMessageHandler(handleNotificationReceived);

notifee.onBackgroundEvent(async ({ type, detail }) => {
  switch (type) {
    case EventType.DISMISSED:
      notifee.cancelNotification(detail.notification.id);
      break;
    case EventType.PRESS:
      handleClickedNotitfication(detail.notification);
      break;
    default:
      break;
  }
});

registerRootComponent(App);
