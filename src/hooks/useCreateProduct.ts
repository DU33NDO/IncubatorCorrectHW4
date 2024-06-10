"use client";
import { axiosInstance } from "@/lib/axiosInstance";
import { Blog } from "@/types/blog";
import {
  useMutation,
  useQueryClient,
  UseMutationResult,
} from "@tanstack/react-query";

interface BlogData {
  title: string;
  price: number;
  description: string;
  images: string;
}

const createBlog = async (blogData: BlogData): Promise<Blog> => {
  const res = await axiosInstance.post<Blog>("blog/create", blogData);
  return res.data;
};

const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<Blog, Error, BlogData>({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};

export { useCreateProduct };
