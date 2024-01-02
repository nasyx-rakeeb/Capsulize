import {useState} from "react"

const useGender = (navigation) => {
  const [gender, setGender] = useState<string>("")
  const notes = ["Can not be empty"]
  
  const handleBtnPress = () => {
    navigation.navigate("")
  }
  
  return{gender, setGender, handleBtnPress, notes}
}

export default useGender