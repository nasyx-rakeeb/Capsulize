import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import colors from "../../others/colors"

const HeaderBackBtn = () => {
    const navigation = useNavigation();
    
    return (
      <MaterialIcon
      name="arrow-back-ios"
      size={24}
      onPress={() => navigation.goBack()}
      color={colors.slateGray}
    />
      )
  }
  
  export default HeaderBackBtn