import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import colors from "../others/colors";
import Ionicons from "react-native-vector-icons/Ionicons";

const tabBarOptions = ({ route }: { route: any }) => ({
  tabBarStyle: {
    backgroundColor: colors.prussianBluePrimary,
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.silver,
  },
  tabBarShowLabel: false,
  tabBarShowIcon: true,
  tabBarIndicatorStyle: {
    backgroundColor: colors.wisteria,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  tabBarIcon: ({ focused, tintColor, size }: any) => {
    let iconName;

    if (route.name === "Home") {
      iconName = focused ? "home-sharp" : "home-outline";
    } else if (route.name === "Created") {
      iconName = focused ? "share" : "share-outline";
    } else if (route.name === "Received") {
      iconName = focused ? "cloud-download" : "cloud-download-outline";
    } else if (route.name === "Notifications") {
      iconName = focused ? "notifications-sharp" : "notifications-outline";
    } else if (route.name === "Account") {
      iconName = focused ? "person-circle-sharp" : "person-circle-outline";
    }

    return (
      <Ionicons
        name={iconName}
        size={24}
        color={!focused ? colors.offWhite : colors.wisteria}
      />
    );
  },
});

export default tabBarOptions;
