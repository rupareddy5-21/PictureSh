import axios from "axios";
import { CreateImageType } from "./types";

const API = axios.create({
  baseURL: "http://127.0.0.1:3000/",
});

export const getUser = (userId: string) => API.get(`/api/user/${userId}`);
export const getAllImages = () => API.get(`/api/image`);
export const uploadImage = (data: CreateImageType) =>
  API.post(`/api/image`, data);
