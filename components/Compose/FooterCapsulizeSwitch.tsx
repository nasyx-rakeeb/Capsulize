import { View, StyleSheet, Text } from "react-native";
import { Switch } from "react-native-paper";
import colors from "../../others/colors";

const FooterCapsulizeSwitch = ({
  timeCapsuleData,
  setTimeCapsuleData,
}: {
  timeCapsuleData: TimeCapsule;
  setTimeCapsuleData: () => void;
}) => {
  const onToggleSwitch = (type: 1 | 2) => {
    if (type === 1) {
      setTimeCapsuleData((p) => ({
        ...p,
        isLocationCapsulized: timeCapsuleData?.isLocationCapsulized ? false : true,
      }));
    } else {
      setTimeCapsuleData((p) => ({
        ...p,
        isMessageCapsulized: timeCapsuleData?.isMessageCapsulized
          ? false
          : true,
      }));
    }
  };

  return (
    <>
    <View style={styles.container}>
          <Text style={styles.label}>Capsulize message</Text>
          <Switch
            style={styles.switch}
            color={colors.wisteria}
            value={timeCapsuleData?.isMessageCapsulized}
            onValueChange={() => onToggleSwitch(2)}
          />
        </View>
      <View style={styles.container}>
        <Text style={styles.label}>Capsulize location</Text>
        <Switch
          style={styles.switch}
          color={colors.wisteria}
          value={timeCapsuleData?.isLocationCapsulized}
          onValueChange={() => onToggleSwitch(1)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontFamily: "Roboto-Regular",
    color: colors.slateGray,
    fontSize: 14,
  },
  switch: {
    marginHorizontal: -11,
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
});

export default FooterCapsulizeSwitch;
