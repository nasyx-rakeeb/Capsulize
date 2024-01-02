import {useState} from "react"

const useName = (navigation) => {
  const [name, setName] = useState<string>("")
  const notes = ["Name can not be empty", "Name must be at least 2 characters long", "Name can not be more than 15 charactera long", "Name can not contain special characters"]
  
  const noteConditionMet = (note) => {
    switch (note) {
      case notes[0]:
        return name.trim() !== "";
      case notes[1]:
        return name.length > 1;
      case notes[2]:
        return name.length <= 15;
      case notes[3]:
        return !/[!@#$%^&*(),.?":{}|<>]/.test(name);
      default:
        return true;
    }
  };
  
  const areAllConditionsMet = () => {
    return notes.every(note => noteConditionMet(note));
  };
  
  const handleBtnPress = () => {
    navigation.navigate("Email")
  }
  
  return{name, setName, handleBtnPress, notes, noteConditionMet, areAllConditionsMet}
}

export default useName