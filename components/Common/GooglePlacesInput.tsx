import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../../others/constants";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import colors from "../../others/colors";

const GooglePlacesInput = ({ onPress }: { onPress: () => void }) => {
  return (
    <GooglePlacesAutocomplete
      styles={styles}
      textInputProps={{
        placeholderTextColor: colors.silver,
      }}
      fetchDetails={true}
      placeholder="Search"
      enablePoweredByContainer={false}
      minLength={3}
      placeholderTextColor={colors.slateGray}
      listLoaderComponent={<Loader />}
      onPress={(data, details = null) => {
        const { location, name } = details.geometry;
        const { lat, lng } = location;
        const address = data?.description;
        onPress(lat, lng, address);
      }}
      query={{
        key: GOOGLE_API_KEY,
        language: "en",
      }}
    />
  );
};

export default GooglePlacesInput;

const styles = StyleSheet.create({
  textInput: {
    color: colors.offWhite,
    borderRadius: 0,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: colors.offWhite,
    marginBottom: 0,
  },
  row: {
    backgroundColor: "transparent",
  },
  separator: {
    backgroundColor: colors.slateGray,
  },
  description: {
    color: colors.offWhite,
  },
});

const Loader = () => {
  const styles = StyleSheet.create({
    loader: {
      backgrroundColor: colors.blackPrimary,
      paddingVertical: 12,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.loader}>
      <ActivityIndicator size="small" color={colors.wisteria} />
    </View>
  );
};
