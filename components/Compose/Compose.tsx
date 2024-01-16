import {
  Modal,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Pressable,
} from "react-native";
import colors from "../../others/colors";
import { useCompose } from "../../hooks";
import Header from "./Header";

const Compose = ({
  visible,
  closeComposeModal,
}: {
  visible: boolean;
  closeComposeModal: () => void;
}) => {
  const { timeCapsuleData, onDone } = useCompose(closeComposeModal);

  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Pressable onPress={Keyboard.dismiss} style={styles.innerContainer}>
          <Header onDone={onDone} closeComposeModal={closeComposeModal} />
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.blackPrimary,
  },
  innerContainer: {
    flex: 1,
  },
});

export default Compose;
