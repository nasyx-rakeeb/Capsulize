import {useState} from "react"

const useProfilePicture = (navigation) => {
  const [profilePicture, setProfilePicture] = useState<string>("")
  const notes = ["Can not be empty"]
  
  const handleBtnPress = () => {
    navigation.navigate("")
  }
  
  return{profilePicture, setProfilePicture, handleBtnPress, notes
  }
}

export default useProfilePicture