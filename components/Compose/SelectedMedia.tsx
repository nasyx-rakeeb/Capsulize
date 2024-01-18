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
        data={data?.media}
        keyExtractor={() => Math.random() * 100}
        renderItem={({ item }) => <MediaItem item={item} setData={setData} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SelectedMedia;
