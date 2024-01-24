import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet, View, Modal, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import colors from "../../others/colors";
import mapStyles from "../../others/mapStyles";
import { MaterialCommunityIcons, Ionicons } from "react-native-vector-icons";
import GooglePlacesInput from "./GooglePlacesInput";

const MapModal = ({
  visible,
  setVisible,
  onCancel,
  onConfirm,
  selectedLocation,
  setSelectedLocation,
  handleLocationChange,
  onFindMe,
  mapRef,
  address,
  searchInputVisible,
  onPressGoogleInputSuggestion,
  openSearchInput,
}: {
  visible: boolean;
  setVisible: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  selectedLocation: { type: string; coordinates: number[] };
  setSelectedLocation: () => void;
  handleLocationChange: () => void;
  onFindMe: () => void;
  mapRef: any;
  address: string | null | undefined;
  searchInputVisible: boolean;
  onPressGoogleInputSuggestion: () => void;
  openSearchInput: () => void;
}) => {
  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          style={styles.locationIcon}
          name="google-maps"
          size={20}
          color={colors.offWhite}
        />
        <Text style={styles.heading}>{address ?? "Select Location"}</Text>
      </View>
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          customMapStyle={mapStyles}
          initialRegion={{
            latitude: selectedLocation?.coordinates[1],
            longitude: selectedLocation?.coordinates[0],
            latitudeDelta: 50,
            longitudeDelta: 180,
          }}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          onPress={handleLocationChange}
        >
          <Marker
            coordinate={{
              latitude: selectedLocation?.coordinates[1],
              longitude: selectedLocation?.coordinates[0],
            }}
          />
        </MapView>
        {searchInputVisible && (
          <View style={styles.searchHeader}>
            <GooglePlacesInput onPress={onPressGoogleInputSuggestion} />
          </View>
        )}
        {!searchInputVisible && (
          <TouchableOpacity style={styles.searchIcon}>
            <Ionicons
              onPress={openSearchInput}
              size={24}
              name="search"
              color={colors.offWhite}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.btnContainer}>
        <Button
          rippleColor={colors.silver}
          onPress={onCancel}
          labelStyle={styles.actionBtns}
          style={styles.btn}
          mode="contained"
          icon="arrow-left"
        ></Button>
        <Button
          rippleColor={colors.silver}
          onPress={onFindMe}
          labelStyle={styles.btnTxt}
          style={styles.btn}
          mode="contained"
          icon="crosshairs-gps"
        >
          Current Location
        </Button>
        <Button
          rippleColor={colors.silver}
          onPress={onConfirm}
          style={styles.btn}
          labelStyle={styles.actionBtns}
          contentStyle={styles.rightActionBtnContent}
          mode="contained"
          icon="arrow-right"
        ></Button>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  btnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.blackPrimary,
    paddingVertical: 6,
  },
  btn: {
    backgroundColor: colors.blackPrimary,
    borderRadius: 6,
  },
  btnTxt: {
    fontFamily: "Roboto-Bold",
    color: colors.offWhite,
  },
  actionBtns: {
    color: colors.offWhite,
    fontSize: 24,
    marginVertical: 0,
  },
  rightActionBtnContent: {
    flexDirection: "row-reverse",
  },
  header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blackPrimary,
    paddingVertical: 8,
    flexDirection: "row",
  },
  searchHeader: {
    position: "absolute",
    width: "95%",
    top: 10,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 6,
  },
  heading: {
    fontFamily: "Roboto-Regular",
    color: colors.offWhite,
    fontSize: 15,
    marginLeft: 3,
    marginHorizontal: 20,
  },
  locationIcon: {
    marginLeft: 8,
  },
  searchIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5,
    borderRadius: 6,
    zIndex: 1,
  },
});

export default MapModal;
