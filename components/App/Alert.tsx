import React, { useState } from "react";
import { Modal, StyleSheet, View, Text, Dimensions } from "react-native";
import colors from "../../others/colors";
import { Button } from "react-native-paper";

const WINDOW_WIDTH = Dimensions.get("window").width;

type Props = {
  title: string;
  description: string;
  btn1title?: string;
  btn1OnPress?: () => void;
  btn2title?: string;
  btn2OnPress?: () => void;
  visible: boolean;
  setVisible: () => void;
};

const Alert: React.FC<Props> = ({
  title,
  description,
  btn1OnPress,
  btn1title,
  btn2OnPress,
  btn2title,
  visible,
  setVisible,
}) => {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={styles.btnContainer}>
            <View style={styles.btn1Container}>
              {!!btn1title && (
                <Button
                  labelStyle={styles.btnTxt}
                  style={styles.btn}
                  mode="contained"
                  onPress={() => {
                    btn1OnPress();
                    setVisible(false);
                  }}
                >
                  {btn1title}
                </Button>
              )}
            </View>
            <View style={styles.btn2Container}>
              <Button
                labelStyle={styles.btnTxt}
                style={styles.btn}
                mode="contained"
                onPress={() => {
                  if (btn2OnPress) {
                    btn2OnPress();
                  }
                  setVisible(false);
                }}
              >
                {btn2title ?? "Cancel"}
              </Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Alert;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  innerContainer: {
    width: WINDOW_WIDTH - 20,
    padding: 12,
    backgroundColor: colors.blackPrimary,
    borderWidth: 0.5,
    borderColor: colors.slateGray,
    borderRadius: 6,
  },
  title: {
    color: colors.offWhite,
    fontFamily: "Rubik-Bold",
    fontSize: 24,
  },
  description: {
    color: colors.offWhite,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },
  contentContainer: {
    width: "100%",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  btn1Container: {},
  btn2Container: {
    marginLeft: 10,
  },
  btn: {
    backgroundColor: colors.wisteria,
    borderRadius: 8,
  },
  btnTxt: {
    color: colors.blackPrimary,
    fontFamily: "Roboto-Medium",
  },
});
