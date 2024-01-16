import { useState } from "react";

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
  
  const onDone = () => {
    closeComposeModal()
    return
  }

  return { timeCapsuleData, onDone };
};

export default useCompose;
