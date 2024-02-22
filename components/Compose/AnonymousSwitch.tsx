import { View, StyleSheet, Text } from "react-native";
import { Switch } from "react-native-paper";
import colors from "../../others/colors";

const AnonymousSwitch = ({
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
        anonymous: timeCapsuleData?.anonymous ? false : true,
      }));
    } else {
      setTimeCapsuleData((p) => ({
        ...p,
        revealIdentityAtRevealTime: timeCapsuleData?.revealIdentityAtRevealTime
          ? false
          : true,
      }));
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Keep my identity hidden</Text>
        <Switch
          style={styles.switch}
          color={colors.wisteria}
          value={timeCapsuleData?.anonymous}
          onValueChange={() => onToggleSwitch(1)}
        />
      </View>

      {timeCapsuleData?.anonymous && (
        <View style={styles.container}>
          <Text style={styles.label}>Show my identity on reveal</Text>
          <Switch
            style={styles.switch}
            color={colors.wisteria}
            value={timeCapsuleData?.revealIdentityAtRevealTime}
            onValueChange={() => onToggleSwitch(2)}
          />
        </View>
      )}
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

export default AnonymousSwitch;
