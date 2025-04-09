import { Post } from "../types"

export const fetchPosts = async (
    { page }: { page: number },
    { signal }: { signal: AbortSignal }
) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`, { signal });
    const posts: Post[] = await response.json();
    return posts;
}