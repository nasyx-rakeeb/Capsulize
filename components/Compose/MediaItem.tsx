import AudioMediaItem from "./MediaItem/Audio";
import VideoMediaItem from "./MediaItem/Video";
import ImageMediaItem from "./MediaItem/Image";

const MediaItem = ({
  item,
  onRemove,
  openFullscreenMedia,
  onCapsulize
}: {
  item: { mediaType: "audio" | "video" | "image"; url: string };
  onRemove: () => void;
  openFullscreenMedia: () => void;
  onCapsulize: () => void
}) => {
  return item?.mediaType === "video" ? (
    <VideoMediaItem
      onRemove={onRemove}
      url={item?.url}
      openFullscreenMedia={openFullscreenMedia}
      isCapsulized={item?.isCapsulized}
      onCapsulize={onCapsulize}
    />
  ) : item?.mediaType === "audio" ? (
    <AudioMediaItem onRemove={onRemove} url={item?.url} isCapsulized={item?.isCapsulized}
      onCapsulize={onCapsulize} />
  ) : item?.mediaType === "image" ? (
    <ImageMediaItem
      onRemove={onRemove}
      url={item?.url}
      openFullscreenMedia={openFullscreenMedia}
      isCapsulized={item?.isCapsulized}
      onCapsulize={onCapsulize}
    />
  ) : null;
};

export default MediaItem;
