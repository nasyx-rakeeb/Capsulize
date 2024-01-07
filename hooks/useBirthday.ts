import { useState, useCallback } from "react";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useAuthContext } from "../context/AuthContext";
import { formatISODate } from "../others/utils";

const useBirthday = (navigation: any) => {
  const [birthday, setBirthday] = useState<string>("");
  const notes = [
    "Date of birth cannot be empty",
    "Birth year should be on or before the current year",
  ];
  const [date, setDate] = useState<Date>(new Date());
  const { setUserData } = useAuthContext();

  const handleBtnPress = () => {
    setUserData((prev) => ({ ...prev, birthday: date }));
    navigation.navigate("Gender");
  };

  const onChange = (
    event: DateTimePickerEvent,
    userSelectedDate: Date | undefined
  ) => {
    setDate(userSelectedDate as Date);
    setBirthday(formatISODate(userSelectedDate as Date));
  };

  const showDatePicker = () => {
    const maximumDate = new Date(new Date());
    maximumDate.setFullYear(new Date().getFullYear() + 1);
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: "date",
      maximumDate: maximumDate,
    });
  };

  const noteConditionMet = (note: string) => {
    switch (note) {
      case notes[0]:
        return !!birthday && birthday.length > 1;
      case notes[1]:
        return (
          Number(new Date(date).getFullYear()) <=
          Number(new Date().getFullYear())
        );
      default:
        return true;
    }
  };

  const areAllConditionsMet = () => {
    return notes.every((note) => noteConditionMet(note));
  };

  return {
    birthday,
    setBirthday,
    handleBtnPress,
    notes,
    noteConditionMet,
    areAllConditionsMet,
    showDatePicker,
  };
};

export default useBirthday;
