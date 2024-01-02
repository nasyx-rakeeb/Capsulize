const useWelcome = (navigation) => {
  const handleBtnPress = (navigateTo: "Login" | "Username") => {
    navigation.navigate(navigateTo)
  }
  
  return {handleBtnPress}
}

export default useWelcome