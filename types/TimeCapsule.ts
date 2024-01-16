interface TimeCapsule {
  recipients: string[];
  audience: "public" | "followers" | "specifiedUsers";
  location: { locationDataType: "Point" | null; coordinates: number[] };
  urls: { url: string; title: string }[];
  text: string;
  revealIdentityAtRevealTime: boolean | null;
  anonymous: boolean;
  revealTime: Date | null;
  media: { mediaType: "image" | "video" | "audio"; url: string }[];
}
