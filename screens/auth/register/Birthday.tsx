import {View, Text, StyleSheet} from "react-native"
import colors from "../../../others/colors"
import { DatePickerModal } from 'react-native-paper-dates';
import {useState, useCallback} from "react"

const Birthday = () => {
  const [date, setDate] = useState();
const [open, setOpen] = useState(true);

const onDismissSingle = useCallback(() => {
setOpen(false);
}, [setOpen]);

const onConfirmSingle = useCallback(
(params) => {
setOpen(false);
setDate(params.date);
},
[setOpen, setDate]
);
  
  return (
    <View style={styles.container}>
    <DatePickerModal
locale="en"
mode="single"
visible={open}
onDismiss={onDismissSingle}
date={date}
onConfirm={onConfirmSingle}
/>
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