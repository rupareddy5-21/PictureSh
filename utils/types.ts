export type UserType = {
  email: string;
  image: string;
  id: string;
  name: string;
  images: ImageType[];
};

export type CreateImageType = {
  title: string;
  description: string;
  category: string;
  // url: string;
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
