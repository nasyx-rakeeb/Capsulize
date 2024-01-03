import {useState} from "react"

const useGender = (navigation) => {
  const [gender, setGender] = useState<string>("")
  const options = ["male", "female", "other"]
  const notes = ["Gender can not be empty"]
  const [optionsVisible, setOptionsVisible] = useState<boolean>(false)
  
  const noteConditionMet = (note) => {
    switch (note) {
      case notes[0]:
        return !!gender && gender.length > 1
      default:
        return true;
    }
  };
  
  const areAllConditionsMet = () => {
    return notes.every(note => noteConditionMet(note));
  };
  
  const handleBtnPress = () => {
    navigation.navigate("ProfilePicture")
  }
  
  return{gender, setGender, handleBtnPress, notes, options, noteConditionMet, areAllConditionsMet, optionsVisible, setOptionsVisible}
}

export default useGender