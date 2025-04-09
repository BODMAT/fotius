import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { Post } from "../types"
import { fetchPosts } from "../services/posts"

export const usePosts = ({ page }: { page: number }) => {
    const { data, error, isPending, isPlaceholderData } = useQuery<Post[]>({
        queryKey: ["posts", { page }],
        queryFn: (meta) => fetchPosts({ page }, meta),
        placeholderData: keepPreviousData,
    });
    return { data, error, isPending, isPlaceholderData }
}