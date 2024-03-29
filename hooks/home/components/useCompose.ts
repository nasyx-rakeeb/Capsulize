import { useState, useRef, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { getCurrentLocation, getCoordinatesInfo } from "../../../services";
import { Keyboard } from "react-native";

const useCompose = (closeComposeModal: () => void) => {
  const [timeCapsuleData, setTimeCapsuleData] = useState<TimeCapsule>({
    recipients: [],
    location: { locationDataType: null, coordinates: [] },
    text: "",
    revealIdentityAtRevealTime: null,
    anonymous: false,
    revealTime: null,
    media: [],
  });
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
  const [coordinatesInfo, setCoordinatesInfo] = useState<null | string>(null);
  const [searchInputVisible, setSearchInputVisible] = useState(false);
  const [locationSource, setLocationSource] = useState<"GPS" | "SEARCH">("GPS");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    (async () => {
      if (selectedLocation.coordinates[0] !== 0 && locationSource === "GPS") {
        const { success, data } = await getCoordinatesInfo(
          selectedLocation?.coordinates[1],
          selectedLocation?.coordinates[0],
        );
        setCoordinatesInfo(data);
      }
    })();
  }, [selectedLocation, locationSource]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const getLocation = async () => {
    const { status, lat, lng } = await getCurrentLocation();

    if (status === "ok") {
      setSelectedLocation({ type: "Point", coordinates: [lng, lat] });
      setCurrentLocation({ type: "Point", coordinates: [lng, lat] });
    }
  };

  const handleLocationChange = (event) => {
    setLocationSource("GPS");
    const { longitude, latitude } = event.nativeEvent.coordinate;
    setSelectedLocation({
      type: "Point",
      coordinates: [parseFloat(longitude), parseFloat(latitude)],
    });
  };

  const onFindMe = async () => {
    setLocationSource("GPS");
    const region = {
      latitude: currentLocation.coordinates[1],
      longitude: currentLocation.coordinates[0],
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0122,
    };

    setSelectedLocation({
      type: "Point",
      coordinates: [
        currentLocation.coordinates[0],
        currentLocation.coordinates[1],
      ],
    });

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
    if (selectedLocation.coordinates[0] === 0) {
      setLoading(true);
      await getLocation();
      setLoading(false);
      setMapVisible(true);
    } else {
      setMapVisible(true);
    }
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
            {
              mediaType: result.assets[0].type,
              url: result.assets[0].uri,
              isCapsulized: true,
              blurAmount: 20,
            },
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
            {
              mediaType: result.assets[0].type,
              url: result.assets[0].uri,
              isCapsulized: true,
              blurAmount: 20,
            },
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
            {
              mediaType: "audio",
              url: result.assets[0].uri,
              isCapsulized: true,
              blurAmount: 20,
            },
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

  const onRemoveLocation = () => {
    setCoordinatesInfo(null);
    setSelectedLocation({
      type: "Point",
      coordinates: [0, 0],
    });
  };

  const onPressGoogleInputSuggestion = (
    lat: number,
    lng: number,
    address: string,
  ) => {
    setSearchInputVisible(false);
    const region = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0122,
    };
    mapRef.current.animateToRegion(region, 2000);
    setLocationSource("SEARCH");
    setSelectedLocation({ type: "Point", coordinates: [lng, lat] });
    setCoordinatesInfo(address);
  };

  const openSearchInput = () => {
    setSearchInputVisible(searchInputVisible ? false : true);
  };

  const onCapsulize = (url: string) => {
    setTimeCapsuleData((prevData) => ({
      ...prevData,
      media: prevData.media.map((item) =>
        item.url === url
          ? { ...item, isCapsulized: !item.isCapsulized, blurAmount: 20 }
          : item,
      ),
    }));
  };

  const setBlurAmount = (url: string, amount: number) => {
    setTimeCapsuleData((prevData) => ({
      ...prevData,
      media: prevData.media.map((item) =>
        item.url === url ? { ...item, blurAmount: amount } : item,
      ),
    }));
  };

  return {
    timeCapsuleData,
    onNext,
    setTimeCapsuleData,
    addAudio,
    addMedia,
    addLocation,
    capture,
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
    coordinatesInfo,
    onRemoveLocation,
    searchInputVisible,
    onPressGoogleInputSuggestion,
    openSearchInput,
    keyboardVisible,
    onCapsulize,
    setBlurAmount,
  };
};

export default useCompose;
