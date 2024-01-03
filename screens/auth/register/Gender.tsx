import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import colors from "../../../others/colors"
import { TextInput, Button } from 'react-native-paper';
import {useGender} from "../../../hooks"
import { List } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Gender = ({navigation}) => {
  const {gender, setGender, handleBtnPress, notes, options, noteConditionMet, areAllConditionsMet, optionsVisible, setOptionsVisible} = useGender(navigation)
  
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
      <Text style={styles.heading}>Gender</Text>
      </View>
      <View style={styles.subHeadingContainer}>
      <Text style={styles.subHeading}>Select the gender you identify with</Text>
      </View>
      <TouchableOpacity onPress={() => setOptionsVisible(optionsVisible ? false : true)} style={styles.inputContainer}>
        <TextInput editable={false} value={gender?.charAt(0)?.toUpperCase() + gender?.slice(1)} left={<TextInput.Icon icon="gender-male-female"/>} style={styles.input} label="Gender" mode="flat" />
      </TouchableOpacity>
      <View style={styles.optionsContainer}>
        {optionsVisible && options.map((option, index) => (
          <List.Item
  key={index}
  onPress={() => {setGender(option); setOptionsVisible(false)} }
  style={styles.optionItem}
  titleStyle={styles.optionTitle}
  title={option.charAt(0).toUpperCase() + option.slice(1)} 
  right={props => (gender === option && <MaterialIcon {...props} name="check" color={colors.silver} size={15} />)}
/>

        ))}
      </View>
      <View style={styles.listContainer}>
        {notes.map((note, index) => (
          <List.Item
            style={styles.listItem}
            titleStyle={[styles.listTitle, !noteConditionMet(note) && styles.error]}
            key={index}
            title={note}
            left={props => <MaterialIcon {...props} name={!noteConditionMet(note) ? "highlight-remove" : "check"} color={!noteConditionMet(note) ? "red" : colors.silver} size={18} />}
          />
        ))}
      </View>
      <View style={styles.btnContainer}>
        <Button labelStyle={styles.btnTxt} style={styles.btn} icon="arrow-right" mode="contained" onPress={handleBtnPress} disabled={!areAllConditionsMet()}>
    Continue
  </Button>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.prussianBluePrimary,
  },
  optionsContainer: {
    width: "100%",
  },
  optionItem: {
    backgroundColor: colors.prussianBlueSecondary,
    marginHorizontal: 25
  },
  optionTitle: {
    fontFamily: "Roboto-Regular",
    color: colors.silver,
    fontSize: 15
  },
  headingContainer: {
    width: "100%",
    marginHorizontal: 25
  },
  heading: {
    color: colors.silver,
    fontFamily: "Poppins-Bold",
    fontSize: 26,
  },
  subHeadingContainer: {
    width: "100%",
    marginHorizontal: 25,
  },
  subHeading: {
    color: colors.slateGray,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 16
  },
  inputContainer: {
    width: "100%",
    marginTop: 50
  },
  input: {
    marginHorizontal: 25,
    backgroundColor: colors.prussianBlueSecondary
  },
  btnContainer: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 30
  },
  btn: {
    marginHorizontal: 25,
  },
  btnTxt: {
    color: colors.prussianBluePrimary,
    fontFamily: "Roboto-Bold"
  },
  listContainer: {
    width: "100%",
    marginHorizontal: 10
  },
  listTitle: {
    fontFamily: "Roboto-Regular",
    color: colors.silver,
    fontSize: 12,
    marginLeft: -8.5
  },
  listItem: {
    marginBottom: -20,
    marginTop: 10
  },
  error: {
    color: "red"
  }
})

export default Gender