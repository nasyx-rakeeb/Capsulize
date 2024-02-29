interface TimeCapsule {
  creator?: string;
  recipients: string[];
  location: {
    locationDataType: "Point" | null;
    coordinates: number[];
  };
  text: string;
  revealIdentityAtRevealTime: boolean | null;
  anonymous: boolean;
  revealTime: Date | null;
  media: {
    mediaType: "image" | "video" | "audio";
    url: string;
    isCapsulized: boolean;
    blurAmount: number;
  }[];
  reactions?: { userId: string; reactionType: string }[];
  comments?: {
    userId: string;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
  createdAt?: Date;
  updatedAt?: Date;
}
