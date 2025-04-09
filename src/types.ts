export interface Review {
    id: string;
    text: string;
    createdAt: string;
    userId: string;
    userName: string;
    userPhotoURL: string;
}

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}
