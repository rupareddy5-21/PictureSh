export type UserType = {
  email: string;
  image: string;
  id: string;
  name: string;
  images: ImageType[];
  followers: Follow[];
  following: Follow[];
};

export type CreateImageType = {
  title: string;
  description: string;
  category: string;
  url: string;
};

export type ImageType = {
  id: number;
  title: string;
  description: string;
  category: string;
  url: string;
  authorId: string;
  author: UserType;
  comments: CommentType[];
  createdAt: Date;
  likes: LikeType[];
  saves: SaveType[];
};

export type CommentType = {
  id: number;
  comment: string;
  user: UserType;
  image: ImageType;
  createdAt: Date;
};

export type CreateCommentType = {
  comment: string;
};

export type LikeType = {
  id: number;
  userId: string;
  imageId: number;
};

export type SaveType = {
  id: number;
  userId: string;
  imageId: number;
};

export type Follow = {
  id: number;
  followingId: string;
  followerId: string;
};
