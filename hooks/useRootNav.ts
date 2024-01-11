import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { useAppContext } from "../context/AppContext";
import { saveFcmToken } from "../services/user_services";
import messaging from "@react-native-firebase/messaging";
import notifee, { EventType } from "@notifee/react-native";
import {
  requestNotificationPermission,
  handleNotificationReceived,
  handleClickedNotitfication,
} from "../others/utils";

export default function useRootNav() {
  const { isUserAuthorized } = useAppContext();
  const [fontsLoaded, errorLoadingFonts] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-BoldItalic": require("../assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("../assets/fonts/Roboto/Roboto-MediumItalic.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik/Rubik-Regular.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik/Rubik-Medium.ttf"),
    "Rubik-Bold": require("../assets/fonts/Rubik/Rubik-Bold.ttf"),
  });

  useEffect(() => {
    const setup = async () => {
      const { success } = await requestNotificationPermission();

      if (success) {
        if (isUserAuthorized) {
          await saveFcmToken();
        }

        const channelId = await notifee.createChannel({
          id: "default",
          name: "Default Channel",
        });

        const messagingUnsubscribe = messaging().onMessage(
          handleNotificationReceived,
        );

        const notifeeUnsubscribeForeground = notifee.onForegroundEvent(
          ({ type, detail }) => {
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
          },
        );

        return {
          messagingUnsubscribe,
          notifeeUnsubscribeForeground,
        };
      }
    };

    const { messagingUnsubscribe, notifeeUnsubscribeForeground } = setup();

    return () => {
      if (messagingUnsubscribe) {
        messagingUnsubscribe();
      }
      if (notifeeUnsubscribeForeground) {
        notifeeUnsubscribeForeground();
      }
    };
  }, []);

  return {
    fontsLoaded,
    errorLoadingFonts,
  };
}
