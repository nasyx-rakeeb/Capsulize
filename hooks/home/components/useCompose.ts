import { useState, useRef, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { getCurrentLocation, getCoordinatesInfo } from "../../../services";

const useCompose = (closeComposeModal: () => void) => {
  const [timeCapsuleData, setTimeCapsuleData] = useState<TimeCapsule>({
    recipients: [],
    audience: "public",
    location: { locationDataType: null, coordinates: [] },
    urls: [],
    text: "",
    revealIdentityAtRevealTime: null,
    anonymous: false,
    revealTime: null,
    media: [],
  });
  const options = ["public", "followers", "specified Users"];
  const [audienceModalVisible, setAudienceModalVisible] = useState(false);
  const [cameraOptionsModalVisible, setCameraOptionsModalVisible] =
    useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    type: "Point",
    coordinates: [0, 0],
  });
  const [currentLocation, setCurrentLocation] = useState({
    type: "Point",
    coordinates: [0, 0],
  });
  const [loading, setLoading] = useState(false);
  const mapRef = useRef();
  const [fullscreenMediaVisible, setFullscreenMediaVisible] = useState(false);
  const [fullscreenMedia, setFullscreenMedia] = useState<null | {
    type: "image" | "video";
    url: string;
  }>(null);
  const [coordinatesInfo, setCoordinatesInfo] = useState<null | string>(null)
  
  useEffect(() => {
    (async () => {
      if (selectedLocation.coordinates[0] !== 0) {
        const {success, data} = await getCoordinatesInfo(selectedLocation?.coordinates[1], selectedLocation?.coordinates[0])
        setCoordinatesInfo(data)
      }
    })()
  }, [selectedLocation])

  const getLocation = async () => {
    const { status, lat, lng } = await getCurrentLocation();

    if (status === "ok") {
      setSelectedLocation({ type: "Point", coordinates: [lng, lat] });
      setCurrentLocation({ type: "Point", coordinates: [lng, lat] });
    }
  };

  const handleLocationChange = (event) => {
    const { longitude, latitude } = event.nativeEvent.coordinate;
    setSelectedLocation({
      type: "Point",
      coordinates: [parseFloat(longitude), parseFloat(latitude)],
    });
  };

  const onFindMe = async () => {
    const region = {
      latitude: currentLocation.coordinates[1],
      longitude: currentLocation.coordinates[0],
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922,
    };

    if (
      currentLocation.coordinates[0] !== 0 &&
      currentLocation.coordinates[1] !== 0
    ) {
      mapRef.current.animateToRegion(region, 2000);
    } else {
      await getLocation();
      mapRef.current.animateToRegion(region, 2000);
    }
  };

  const onNext = () => {
    closeComposeModal();
    return;
  };

  const onCancelLocation = () => {
    setMapVisible(false);
  };

  const onSelectLocation = () => {
    setTimeCapsuleData((p) => ({ ...p, location: { ...selectedLocation } }));
    onCancelLocation();
  };

  const addLocation = async () => {
    setLoading(true);
    await getLocation();
    setLoading(false);
    setMapVisible(true);
  };

  const addMedia = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
        base64: true,
      });

      if (!result.canceled) {
        setTimeCapsuleData((p) => ({
          ...p,
          media: [
            ...p?.media,
            { mediaType: result.assets[0].type, url: result.assets[0].uri },
          ],
        }));
      }
    } catch (error) {
      console.log("Error occurred while launching media library: " + error);
    }
  };

  const capture = async (option: "video" | "image") => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Error",
        "Sorry, we need camera permissions to make this work!",
      );
      return;
    }

    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes:
          option === "image"
            ? ImagePicker.MediaTypeOptions.Images
            : ImagePicker.MediaTypeOptions.Videos,
        quality: 1,
        base64: true,
        allowsEditing: true,
      });

      if (!result.canceled) {
        setTimeCapsuleData((p) => ({
          ...p,
          media: [
            ...p?.media,
            { mediaType: result.assets[0].type, url: result.assets[0].uri },
          ],
        }));
      }
    } catch (error) {
      console.log("Error occurred while launching the camera: ", error);
    }
  };

  const addAudio = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "audio/*",
      });
      if (!result?.canceled) {
        setTimeCapsuleData((p) => ({
          ...p,
          media: [
            ...p?.media,
            { mediaType: "audio", url: result.assets[0].uri },
          ],
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onRemove = (url: string) => {
    setTimeCapsuleData((prevData) => ({
      ...prevData,
      media: prevData.media.filter((item) => item.url !== url),
    }));
  };

  const closeFullscreenMedia = () => {
    setFullscreenMediaVisible(false);
    setFullscreenMedia(null);
  };

  const openFullscreenMedia = (url: string, type: string) => {
    setFullscreenMedia({ url, type });
    setFullscreenMediaVisible(true);
  };

  return {
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
    fullscreenMediaVisible,
    fullscreenMedia,
    closeFullscreenMedia,
    openFullscreenMedia,
    coordinatesInfo
  };
};

export default useCompose;
