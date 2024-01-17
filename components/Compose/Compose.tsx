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
import Alert from "../App/Alert";

const Compose = ({
  visible,
  closeComposeModal,
}: {
  visible: boolean;
  closeComposeModal: () => void;
}) => {
  const {
    timeCapsuleData,
    onNext,
    options,
    setTimeCapsuleData,
    addAudio,
    addMedia,
    addLocation,
    addLink,
    capture,
    audienceModalVisible,
    setAudienceModalVisible,
    cameraOptionsModalVisible,
    setCameraOptionsModalVisible,
  } = useCompose(closeComposeModal);

  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <Alert
        title="Capture Media"
        description="Select the desired media type by choosing either 'Image' or 'Video'"
        btn1title="Image"
        btn2title="Video"
        btn1OnPress={() => capture("image")}
        btn2OnPress={() => capture("video")}
        visible={cameraOptionsModalVisible}
        setVisible={setCameraOptionsModalVisible}
      />
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
            onNext={onNext}
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
          cameraOptionsModalVisible={cameraOptionsModalVisible}
          setCameraOptionsModalVisible={setCameraOptionsModalVisible}
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
