import {
  Modal,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";
import colors from "../../others/colors";
import { useCompose } from "../../hooks";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import AudienceModal from "./AudienceModal";

const Compose = ({
  visible,
  closeComposeModal,
}: {
  visible: boolean;
  closeComposeModal: () => void;
}) => {
  const {
    timeCapsuleData,
    onDone,
    options,
    setTimeCapsuleData,
    addAudio,
    addMedia,
    addLocation,
    addLink,
    capture,
    audienceModalVisible,
    setAudienceModalVisible,
  } = useCompose(closeComposeModal);

  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <AudienceModal
        audienceModalVisible={audienceModalVisible}
        setAudienceModalVisible={setAudienceModalVisible}
        options={options}
        setTimeCapsuleData={setTimeCapsuleData}
        timeCapsuleData={timeCapsuleData}
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView style={styles.innerContainer}>
          <Header
            onDone={onDone}
            closeComposeModal={closeComposeModal}
            timeCapsuleData={timeCapsuleData}
            audienceModalVisible={audienceModalVisible}
            setAudienceModalVisible={setAudienceModalVisible}
          />
          <Body
            timeCapsuleData={timeCapsuleData}
            setTimeCapsuleData={setTimeCapsuleData}
          />
        </ScrollView>
        <Footer
          addLink={addLink}
          addLocation={addLocation}
          addMedia={addMedia}
          addAudio={addAudio}
          capture={capture}
        />
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
