import {useState, useCallback} from "react"
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker'

const useBirthday = (navigation) => {
  const [birthday, setBirthday] = useState<string>("")
  const notes = ["Date of birth can not be empty", "Birth year should be on or before the current year"]
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
        year: 'numeric'
      });
    setBirthday(formattedDate)
  };

  const showDatePicker = () => {
    const maximumDate = new Date(new Date());
    maximumDate.setFullYear(new Date().getFullYear() + 1);
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: "date",
      maximumDate: maximumDate
    });
  };
  
  const noteConditionMet = (note) => {
    switch (note) {
      case notes[0]:
        return !!birthday && birthday.length > 1;
      case notes[1]:
        return Number(new Date(date).getFullYear()) <= Number(new Date().getFullYear()) 
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