import {useState} from "react"

const useEmail = (navigation) => {
  const [email, setEmail] = useState<string>("");
  const notes = ["Email can not be empty", "Email must be in valid format"]
  
  const noteConditionMet = (note) => {
    switch (note) {
      case notes[0]:
        return email.trim() !== "";
      case notes[1]:
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      default:
        return true;
    }
  };
  
  const areAllConditionsMet = () => {
    return notes.every(note => noteConditionMet(note));
  };
  
  const handleBtnPress = () => {
    navigation.navigate("Bio");
  }
  
  return { email, setEmail, handleBtnPress, notes, noteConditionMet, areAllConditionsMet };
}

export default useEmail;
