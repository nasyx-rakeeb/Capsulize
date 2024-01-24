import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import colors from "../../others/colors";
import SelectedMedia from "./SelectedMedia";
import { Feather, MaterialIcons } from "react-native-vector-icons";
const WIDTH = Dimensions.get("window").width;

const Body = ({
  timeCapsuleData,
  setTimeCapsuleData,
  onRemove,
  openFullscreenMedia,
  address,
  onRemoveLocation,
}: {
  timeCapsuleData: TimeCapsule;
  setTimeCapsuleData: () => void;
  onRemove: () => void;
  openFullscreenMedia: () => void;
  address: string | null | undefined;
  onRemoveLocation: () => void;
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
      {address && (
        <View style={styles.locationItem}>
          <MaterialIcons
            style={styles.locationIcon}
            name="location-on"
            size={24}
            color={colors.blackPrimary}
          />
          <Text style={styles.location}>{address}</Text>
          <TouchableOpacity
            style={styles.removeIcon}
            onPress={onRemoveLocation}
          >
            <MaterialIcons
              name="highlight-remove"
              size={24}
              color={colors.blackPrimary}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackPrimary,
    width: "100%",
    paddingVertical: 12,
  },
  inputContainer: {
    width: "100%",
    marginHorizontal: 16,
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
    marginHorizontal: 16,
  },
  locationItem: {
    backgroundColor: colors.wisteria,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 200,
    alignSelf: "center",
    marginTop: 18
  },
  location: {
    fontFamily: "Roboto-Medium",
    color: colors.blackPrimary,
    flex: 0.9,
  },
  locationIcon: {
    flex: 0.1,
    marginRight: 4,
  },
  removeIcon: {
    flex: 0.1,
    marginLeft: 10,
  },
});

export default Body;
