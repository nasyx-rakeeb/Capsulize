import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Portal } from "react-native-paper";
import colors from "../others/colors";
import Constants from "expo-constants";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  runOnJS,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const statusBarHeight = Constants.statusBarHeight;

interface NotificationProps {
  message: string;
  duration?: number;
  visible: boolean;
  bgColor?: string;
  textColor?: string;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  duration = 4000,
  visible = false,
  bgColor = colors.brightTurquoise,
  textColor = colors.prussianBluePrimary,
}) => {
  const translateY = useSharedValue(-100);

  useEffect(() => {
    if (visible) {
      translateY.value = withSpring(0);
      setTimeout(() => {
        runOnJS(handlePressClose)();
      }, duration);
    } else {
      translateY.value = withSpring(-100);
    }
  }, [visible, duration]);

  const handlePressClose = () => {
    translateY.value = withSpring(-100);
  };

  const panGestureHandler = useAnimatedGestureHandler({
    onEnd: (event) => {
      if (event.velocityY < 0) {
        translateY.value = withSpring(-100);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  if (!visible) {
    return null;
  }

  return (
    <Portal>
      <PanGestureHandler onGestureEvent={panGestureHandler}>
        <Animated.View
          style={[
            styles.notification,
            animatedStyle,
            { backgroundColor: bgColor },
          ]}
        >
          <Text style={[styles.notificationText, { color: textColor }]}>
            {message}
          </Text>
        </Animated.View>
      </PanGestureHandler>
    </Portal>
  );
};

const styles = StyleSheet.create({
  notification: {
    position: "absolute",
    top: statusBarHeight + 10,
    alignSelf: "center",
    width: Dimensions.get("window").width - 20,
    paddingVertical: 12,
    paddingHorizontal: 8,
    elevation: 5,
    borderRadius: 6,
  },

  notificationText: {
    flex: 1,
    fontSize: 15,
    fontFamily: "Roboto-Medium",
    lineHeight: 17,
    textAlign: "center",
  },
});

export default Notification;
