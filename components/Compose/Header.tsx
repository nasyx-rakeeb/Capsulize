import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../others/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button } from "react-native-paper";

const Header = ({
  closeComposeModal,
  onDone,
  audienceModalVisible,
  setAudienceModalVisible,
  timeCapsuleData,
}: {
  closeComposeModal: () => void;
  onDone: () => void;
  audienceModalVisible: boolean;
  setAudienceModalVisible: () => void;
  timeCapsuleData: TimeCapsule;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.left}>
        <Ionicons
          onPress={closeComposeModal}
          name="close-outline"
          size={32}
          color={colors.offWhite}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          setAudienceModalVisible(audienceModalVisible ? false : true)
        }
      >
        <Button
          style={styles.outlinedBtn}
          labelStyle={styles.outlinedBtnTxt}
          mode="outlined"
          icon="account-arrow-down"
        >
          {timeCapsuleData?.audience}
        </Button>
      </TouchableOpacity>
      <View style={styles.right}>
        <Button
          onPress={onDone}
          style={styles.btn}
          labelStyle={styles.btnTxt}
          mode="contained"
        >
          Done
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackPrimary,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    marginLeft: 12,
  },
  right: {
    marginRight: 12,
  },
  btnTxt: {
    marginVertical: 3,
    marginHorizontal: 14,
    color: colors.blackPrimary,
    fontFamily: "Roboto-Medium",
  },
  btn: {
    borderRadius: 6,
  },
  outlinedBtnTxt: {
    marginVertical: 2,
    marginHorizontal: 10,
    color: colors.offWhite,
    fontFamily: "Roboto-Medium",
    marginLeft: 22,
  },
  outlinedBtn: {
    borderColor: colors.offWhite,
  },
});

export default Header;
