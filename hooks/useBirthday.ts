import {useState} from "react"

const useBirthday = (navigation) => {
  const [birthday, setBirthday] = useState<string>("")
  const notes = ["Can not be empty"]
  
  const handleBtnPress = () => {
    navigation.navigate("")
  }
  
  return{birthday, setBirthday, handleBtnPress, notes}
}

export default useBirthday