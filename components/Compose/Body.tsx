import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import colors from "../../others/colors";
import SelectedMedia from "./SelectedMedia";
import { Feather } from "react-native-vector-icons";

const Body = ({
  timeCapsuleData,
  setTimeCapsuleData,
  onRemove,
  openFullscreenMedia,
}: {
  timeCapsuleData: TimeCapsule;
  setTimeCapsuleData: () => void;
  onRemove: () => void;
  openFullscreenMedia: () => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          onChangeText={(v) => setTimeCapsuleData((p) => ({ ...p, text: v }))}
          value={timeCapsuleData?.text}
          style={styles.input}
          placeholder="Add a message..."
          cursorColor={colors.offWhite}
          placeholderTextColor={colors.gray}
        />
      </View>
      <View style={styles.selectedMediaContainer}>
        <SelectedMedia
          onRemove={onRemove}
          data={timeCapsuleData}
          setData={setTimeCapsuleData}
          openFullscreenMedia={openFullscreenMedia}
        />
      </View>
      <View style={styles.locationContainer}>
        <View style={styles.location}>
          <Feather name="map-pin" size={18} color={colors.blackPrimary} />
          <>
            <Text style={styles.locationTxt}>New York, US 17382</Text>
            <TouchableOpacity>
              <Feather name="x" size={22} color={colors.blackPrimary} />
            </TouchableOpacity>
          </>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackPrimary,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: colors.prussianBlueSecondary,
    maxHeight: 300,
    backgroundColor: colors.blackPrimary,
    fontSize: 18,
    height: "auto",
    color: colors.offWhite,
  },
  selectedMediaContainer: {
    marginTop: 18,
  },
  locationContainer: {
    marginTop: 18,
    alignItems: "flex-start",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.wisteria,
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  locationTxt: {
    fontFamily: "Roboto-Medium",
    color: colors.blackPrimary,
    marginRight: 20,
    marginLeft: 5,
  },
});

export default Body;
