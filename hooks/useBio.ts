import {useState} from "react"

const useBio = (navigation) => {
  const [bio, setBio] = useState<string>("");
  const maxBioLength = 100;
  const notes = ["Bio can not be greater than 100 characters"];
  
  const noteConditionMet = (note) => {
    switch (note) {
      case notes[0]:
        return bio.length <= maxBioLength;
      default:
        return true;
    }
  };
  
  const areAllConditionsMet = () => {
    return notes.every(note => noteConditionMet(note));
  };
  
  const handleBtnPress = () => {
      navigation.navigate("Birthday");
  }
  
  return { bio, setBio, handleBtnPress, notes, noteConditionMet, areAllConditionsMet };
}

export default useBio;
