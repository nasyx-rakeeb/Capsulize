import {useState, useCallback} from "react"
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker'

const useBirthday = (navigation) => {
  const [birthday, setBirthday] = useState<string>("")
  const notes = ["Date of birth can not be empty"]
  const [date, setDate] = useState<Date>(new Date());
  
  const handleBtnPress = () => {
    navigation.navigate("Gender")
  }

  const onChange = (event, userSelectedDate) => {
    setDate(userSelectedDate);
    const selectedDate = new Date(userSelectedDate);
    const formattedDate = selectedDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    setBirthday(formattedDate)
  };

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: "date"
    });
  };
  
  const noteConditionMet = (note) => {
    switch (note) {
      case notes[0]:
        return !!birthday && birthday.length > 1;
      default:
        return true;
    }
  };
  
  const areAllConditionsMet = () => {
    return notes.every(note => noteConditionMet(note));
  };
  
  return {birthday, setBirthday, handleBtnPress, notes, noteConditionMet, areAllConditionsMet, showDatePicker}
}

export default useBirthday