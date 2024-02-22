import * as SecureStore from "expo-secure-store";
import messaging from "@react-native-firebase/messaging";
import notifee, { AuthorizationStatus } from "@notifee/react-native";

export const isEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};

export const formatISODate = (date: Date) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return formattedDate;
};

export const getJwtToken = async (): Promise<{
  tokenFound: boolean;
  token: string | null;
  reason?: "not-available" | "error-occurred";
}> => {
  try {
    const token = await SecureStore.getItemAsync("JWT_TOKEN");
    if (!token) {
      return { tokenFound: false, token: null, reason: "not-available" };
    }
    return { tokenFound: true, token };
  } catch (error) {
    console.log(error);
    return { tokenFound: false, token: null, reason: "error-occurred" };
  }
};

export const getFcmToken = async (): Promise<{
  success: boolean;
  fcmToken: string | null;
}> => {
  try {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    return { success: true, fcmToken: token };
  } catch (error) {
    console.log("error: " + error);
    return { success: false, fcmToken: null };
  }
};

export const requestNotificationPermission = async (): Promise<{
  success: boolean;
}> => {
  const settings = await notifee.requestPermission();
  if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
    return { success: true };
  } else {
    console.log("User declined permissions");
    return { success: false };
  }
};

export const getInitialNotification = async () => {
  const initialNotification = await notifee.getInitialNotification();

  if (initialNotification) {
    return {
      initialNotification: initialNotification.notification,
      pressAction: initialNotification.pressAction,
    };
  }

  return { initialNotification: null, pressAction: null };
};

export const handleNotificationReceived = async (notification) => {
  console.log(`HANDLE NOTIFICATION RECEIVED:`);

  /*const { type, timestamp } = notification.data;
  if (type === 'order_shipped') {
    notifee.displayNotification({
      title: 'Your order has been shipped',
      body: `Your order was shipped at ${new Date(Number(timestamp)).toString()}!`,
      android: {
        channelId: 'orders',
      },
    });
  }*/
};

export const handleClickedNotitfication = (notification): void => {
  /*if (notifcation && notification.data && notification.data.type) {
    switch (notification.data.type) {
      case 'Product':
        navigateToProduct({
          navigation: NavigationService,
          id: notification.data.product_id,
          title: notification.data.product_name,
        });
        break;
      case 'Category':
        navigateToCategory({
          navigation: NavigationService,
          id: notification.data.category_id,
          title: notification.data.category_name,
        });
        break;
      case 'Brand':
        navigateToBrand({ navigation: NavigationService, id: notification.data.brand_id, title: notification.data.brand_name });
        break;
      default:
        navigateToHome({ navigation: NavigationService });
    }
  }*/
};
