import {View, Text, StyleSheet} from "react-native"
import colors from "../../../others/colors"

const Birthday = () => {
  return (
    <View style={styles.container}>
    <Text>Hi</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.prussianBluePrimary
  }
})

export default Birthday