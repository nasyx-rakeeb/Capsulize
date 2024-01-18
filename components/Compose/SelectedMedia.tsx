import { View, Text, StyleSheet, FlatList } from "react-native";
import colors from "../../others/colors";
import MediaItem from "./MediaItem";

const SelectedMedia = ({
  data,
  setData,
}: {
  data: TimeCapsule;
  setData: () => void;
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={Math.random() * 100}
        renderItem={({ item }) => <MediaItem item={item} setData={setData} />}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default SelectedMedia;
