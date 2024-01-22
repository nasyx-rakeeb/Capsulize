import AudioMediaItem from "./MediaItem/Audio";
import VideoMediaItem from "./MediaItem/Video";
import ImageMediaItem from "./MediaItem/Image";

const MediaItem = ({
  item,
  onRemove,
  openFullscreenMedia,
}: {
  item: { mediaType: "audio" | "video" | "image"; url: string };
  onRemove: () => void;
  openFullscreenMedia: () => void;
}) => {
  return item?.mediaType === "video" ? (
    <VideoMediaItem
      onRemove={onRemove}
      url={item?.url}
      openFullscreenMedia={openFullscreenMedia}
    />
  ) : item?.mediaType === "audio" ? (
    <AudioMediaItem onRemove={onRemove} url={item?.url} />
  ) : item?.mediaType === "image" ? (
    <ImageMediaItem
      onRemove={onRemove}
      url={item?.url}
      openFullscreenMedia={openFullscreenMedia}
    />
  ) : null;
};

export default MediaItem;
