import AudioMediaItem from "./MediaItem/Audio";
import VideoMediaItem from "./MediaItem/Video";
import ImageMediaItem from "./MediaItem/Image";

const MediaItem = ({
  item,
  setData,
}: {
  item: { mediaType: "audio" | "video" | "image"; url: string };
  setData: () => void;
}) => {
  return item?.mediaType === "video" ? (
    <VideoMediaItem url={item?.url} />
  ) : item?.mediaType === "audio" ? (
    <AudioMediaItem url={item?.url} />
  ) : item?.mediaType === "image" ? (
    <ImageMediaItem url={item?.url} />
  ) : null;
};

export default MediaItem;
