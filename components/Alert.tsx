import React from "react";
import { Modal, StyleSheet, View, Text, Dimensions } from "react-native";
import colors from "../others/colors";
import {Button} from "react-native-paper"

const WINDOW_WIDTH = Dimensions.get("window").width

type Props = {
  title: string;
  description: string;
};

const Alert: React.FC<Props> = ({
  title,
  description
}) => {
  return (
    <Modal transparent={true} animationType="fade" visible={true}>
      <View
        style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={styles.btnContainer}>
            <View style={styles.btn1Container}>
            <Button labelStyle={styles.btnTxt} style={styles.btn1} mode="contained">Proceed</Button>
            </View>
            <View style={styles.btn2Container}>
            <Button labelStyle={styles.btnTxt} style={styles.btn1} mode="contained">Cancel</Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
 //   backgroundColor: "rgba(0, 0, 0, 0.7)"
  },
  innerContainer: {
    width: WINDOW_WIDTH - 20,
    padding: 12,
    backgroundColor: colors.darkBlue,
    borderWidth: 1,
    borderColor: colors.navyBlue,
    borderRadius: 6
  },
  title: {
    color: colors.white,
    fontFamily: "Poppins-Bold",
    fontSize: 24
  },
  description: {
    color: colors.white,
    fontFamily: "Roboto-Regular",
    lineHeight: 19
  },
  contentContainer: {
    width: "100%"
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20
  },
  btn1Container: {
    
  },
  btn2Container: {
    marginLeft: 10
  },
  btn1: {
    backgroundColor: colors.shadeBlue,
    borderRadius: 8,
  },
  btn2: {
    backgroundColor: colors.shadeBlue
  },
  btnTxt: {
    color: colors.white,
    fontFamily: "Roboto-Regular"
  }
});
 
export default Alert;
