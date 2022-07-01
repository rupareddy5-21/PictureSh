import axios from "axios";
import { CreateCommentType, CreateImageType } from "./types";

const API = axios.create({
  baseURL: "http://127.0.0.1:3000/",
  withCredentials: true,
});

export const getUser = (userId: string, cookie: string) =>
  API.get(`/api/user/${userId}`, {
    headers: {
      Cookie: `next-auth.session-token=${cookie}`,
    },
  });
export const getAllImages = (cookie: string) =>
  API.get(`/api/image`, {
    headers: {
      Cookie: `next-auth.session-token=${cookie}`,
    },
  });
export const uploadImage = (data: CreateImageType, cookie: string) =>
  API.post(`/api/image`, data, {
    headers: {
      Cookie: `next-auth.session-token=${cookie}`,
    },
  });
export const getSingleImage = (imageId: number, cookie: string) =>
  API.get(`/api/image/${imageId}`, {
    headers: {
      Cookie: `next-auth.session-token=${cookie}`,
    },
  });
export const deleteImage = (imageId: number, cookie: string) =>
  API.delete(`/api/image/${imageId}`, {
    headers: {
      Cookie: `next-auth.session-token=${cookie}`,
    },
  });

export const getYourImages = (cookie: string) =>
  API.get(`/api/image/yourimages`, {
    headers: {
      Cookie: `next-auth.session-token=${cookie}`,
    },
  });

export const addComment = (
  data: CreateCommentType,
  cookie: string,
  imageId: number
) =>
  API.post(
    `/api/image/${imageId}/comment`,
    {
      comment: data,
    },
    {
      headers: {
        Cookie: `next-auth.session-token=${cookie}`,
      },
    }
  );

export const likeImage = (imageId: number, cookie: string) =>
  API.put(
    `/api/image/${imageId}/like`,
    {},
    {
      headers: {
        Cookie: `next-auth.session-token=${cookie}`,
      },
    }
  );

export const saveImage = (imageId: number, cookie: string) =>
  API.put(
    `/api/image/${imageId}/save`,
    {},
    {
      headers: {
        Cookie: `next-auth.session-token=${cookie}`,
      },
    }
  );

export const getSavedImages = (cookie: string) =>
  API.get(`/api/user/savedimages`, {
    headers: {
      Cookie: `next-auth.session-token=${cookie}`,
    },
  });

export const searchImages = (search: string, cookie: string) =>
  API.get(`/api/image/search/${search}`, {
    headers: {
      Cookie: `next-auth.session-token=${cookie}`,
    },
  });

export const getCategoryImages = (category: string, cookie: string) =>
  API.get(`/api/image/category/${category}`, {
    headers: {
      Cookie: `next-auth.session-token=${cookie}`,
    },
  });

export const followUser = (userId: string, cookie: string) =>
  API.put(
    `/api/user/${userId}/follow`,
    {},
    {
      headers: {
        Cookie: `next-auth.session-token=${cookie}`,
      },
    }
  );
