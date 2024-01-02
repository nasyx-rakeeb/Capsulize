import {useState} from "react"

const useUsername = (navigation) => {
  const [username, setUsername] = useState<string>("")
  
  const notes = ["Username can not be empty", "Username must be at least 4 characters long", "Username must not be more than 15 characters long", "Username can not contain white space"]
  
  const noteConditionMet = (note) => {
    switch (note) {
      case notes[0]:
        return username.trim() !== "";
      case notes[1]:
        return username.length >= 4;
      case notes[2]:
        return username.length <= 15;
      case notes[3]:
        return !/\s/.test(username);
      default:
        return true;
    }
  };
  
  const areAllConditionsMet = () => {
    return notes.every(note => noteConditionMet(note));
  };
  
  const handleBtnPress = () => {
    navigation.navigate("Name")
  }
  
  return{username, setUsername, handleBtnPress, notes, noteConditionMet, areAllConditionsMet}
}

export default useUsername