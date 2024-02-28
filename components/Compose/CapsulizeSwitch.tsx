import {View, StyleSheet, Text} from "react-native"
import {Switch} from 'react-native-paper'
import colors from "../../others/colors";

const CapsulizeSwitch = ({value, onChange}: {value: boolean, onChange: () => void}) => {
  return (
    <View style={styles.capsulizeBtn}>
        <Text style={styles.capsulizeBtnTxt}>Capsulize</Text>
        <Switch
          style={styles.switch}
          color={colors.wisteria}
          value={value}
          onValueChange={onChange}
        />
      </View>
    )
}

export default CapsulizeSwitch

const styles = StyleSheet.create({
  switch: {
    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
    marginRight: -3
  },
  capsulizeBtnTxt: {
    color: colors.offWhite,
    fontFamily: 'Rubik-Medium',
    marginLeft: 6,
    fontSize: 15.5 
  },
  capsulizeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    position: "absolute",
    top: 4,
    left: 4,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0, 0.5)",
    zIndex: 1,
  }
})