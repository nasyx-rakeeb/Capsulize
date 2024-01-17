import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import { StyleSheet, View } from "react-native";

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} />
    </View>
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
});

export default Map;
