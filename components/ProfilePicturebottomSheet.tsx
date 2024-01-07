import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import React, { RefObject, useMemo, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Portal } from "react-native-paper";
import colors from "../others/colors";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

const ProfilePicturebottomSheet = ({
  sheetRef,
  pickImage,
  closeBottomSheet,
  openCamera,
}: {
  sheetRef: RefObject<BottomSheetMethods>;
  pickImage: () => void;
  closeBottomSheet: () => void;
  openCamera: () => void;
}) => {
  const snapPoints = useMemo(() => ["20%"], []);

  return (
    <Portal>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        handleStyle={styles.sheetHandle}
        handleIndicatorStyle={styles.sheetIndicator}
        backgroundStyle={styles.sheetBackground}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.7}
            enableTouchThrough={false}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            style={[
              { backgroundColor: "rgba(0, 0, 0, 1)" },
              StyleSheet.absoluteFillObject,
            ]}
          />
        )}
      >
        <View style={styles.sheetContentContainer}>
          <Button
            onPress={openCamera}
            icon="camera"
            labelStyle={styles.btnTxt}
            mode="text"
          >
            Camera
          </Button>
          <Button
            icon="folder-multiple-image"
            labelStyle={styles.btnTxt}
            mode="text"
            onPress={pickImage}
          >
            Gallery
          </Button>
          <Button
            onPress={closeBottomSheet}
            icon="cancel"
            labelStyle={styles.cancelBtnTxt}
            mode="text"
          >
            Cancel
          </Button>
        </View>
      </BottomSheet>
    </Portal>
  );
};

const styles = StyleSheet.create({
  sheetContentContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.prussianBluePrimary,
    justifyContent: "center",
  },
  sheetHandle: {
    backgroundColor: colors.prussianBlueSecondary,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  sheetIndicator: {
    backgroundColor: colors.silver,
  },
  sheetBackground: {
    backgroundColor: colors.prussianBluePrimary,
  },
  cancelBtnTxt: {
    color: "red",
    fontFamily: "Roboto-Bold",
  },
  btnTxt: {
    fontFamily: "Roboto-Bold",
    color: colors.silver,
  },
});

export default ProfilePicturebottomSheet;
