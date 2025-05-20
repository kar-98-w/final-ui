import axios from "axios";
import type { Post } from "../types/Post";

const API_BASE = "http://localhost:8080/marron/posts";

export const getAllPosts = async (): Promise<Post[]> => {
  const res = await axios.get<Post[]>(API_BASE);
  return res.data;
};

export const createPost = async (data: Omit<Post, "id" | "createdAt" | "updatedAt">): Promise<Post> => {
  const res = await axios.post<Post>(API_BASE, data);
  return res.data;
};

export const updatePost = async (id: number, data: Partial<Post>): Promise<Post> => {
  const res = await axios.put<Post>(`${API_BASE}/${id}`, data);
  return res.data;
};

export const deletePost = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE}/${id}`);
};