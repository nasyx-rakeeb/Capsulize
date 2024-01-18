import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet, View, Modal } from "react-native";
import { Button } from "react-native-paper";
import colors from "../../others/colors";
import mapStyles from "../../others/mapStyles";

const MapModal = ({
  visible,
  setVisible,
  onCancel,
  onConfirm,
  selectedLocation,
  setSelectedLocation,
  handleLocationChange,
}: {
  visible: boolean;
  setVisible: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  selectedLocation: { type: string; coordinates: number[] };
  setSelectedLocation: () => void;
  handleLocationChange: () => void;
}) => {
  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <View style={styles.container}>
        <MapView
          customMapStyle={mapStyles}
          initialRegion={{
            latitude: selectedLocation?.coordinates[0],
            longitude: selectedLocation?.coordinates[1],
            latitudeDelta: 50,
            longitudeDelta: 180,
          }}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          onPress={handleLocationChange}
        >
          <Marker
            coordinate={{
              latitude: selectedLocation?.coordinates[0],
              longitude: selectedLocation?.coordinates[1],
            }}
            title="Selected Location"
            description="Move me to select a location"
          />
        </MapView>
      </View>
      <View style={styles.btnContainer}>
        <Button
          rippleColor={colors.silver}
          onPress={onCancel}
          labelStyle={styles.btnTxt}
          style={styles.btn}
          mode="contained"
        >
          Cancel
        </Button>
        <Button
          rippleColor={colors.silver}
          onPress={onConfirm}
          style={styles.btn}
          labelStyle={styles.btnTxt}
          mode="contained"
        >
          Confirm
        </Button>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  btnContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    backgroundColor: colors.blackPrimary,
    borderRadius: 6,
  },
  btnTxt: {
    fontFamily: "Roboto-Bold",
    color: colors.offWhite,
    marginVertical: 8,
    marginHorizontal: 12,
  },
});

export default MapModal;
