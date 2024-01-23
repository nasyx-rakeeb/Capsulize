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
import MapModal from "../Common/MapModal";
import FullScreenLoader from "../App/FullScreenLoader";
import FullscreenMediaModal from "./FullscreenMedia";

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
    capture,
    audienceModalVisible,
    setAudienceModalVisible,
    cameraOptionsModalVisible,
    setCameraOptionsModalVisible,
    mapVisible,
    setMapVisible,
    onSelectLocation,
    onCancelLocation,
    selectedLocation,
    setSelectedLocation,
    handleLocationChange,
    onFindMe,
    mapRef,
    loading,
    onRemove,
    closeFullscreenMedia,
    openFullscreenMedia,
    fullscreenMediaVisible,
    fullscreenMedia,
    coordinatesInfo,
  } = useCompose(closeComposeModal);

  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <FullscreenMediaModal
        visible={fullscreenMediaVisible}
        fullscreenMedia={fullscreenMedia}
        closeModal={closeFullscreenMedia}
      />
      <FullScreenLoader visible={loading} />
      <MapModal
        onCancel={onCancelLocation}
        onConfirm={onSelectLocation}
        visible={mapVisible}
        setVisible={setMapVisible}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        handleLocationChange={handleLocationChange}
        onFindMe={onFindMe}
        mapRef={mapRef}
        address={coordinatesInfo}
      />
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
            onRemove={onRemove}
            openFullscreenMedia={openFullscreenMedia}
            address={coordinatesInfo}
          />
        </ScrollView>
        <Footer
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
