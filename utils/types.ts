export type UserType = {
  email: string;
  image: string;
  id: string;
  name: string;
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
  createdAt: Date;
};
