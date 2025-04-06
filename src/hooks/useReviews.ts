import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchReviews, addReview } from "../services/reviews";
import { Review } from "../types";
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from "../lib/firebase";

export const useReviews = () => {
    return useQuery<Review[]>({
        queryKey: ["reviews"],
        queryFn: fetchReviews,
    });
};

export const useAddReview = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addReview,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["reviews"] });
        },
    });
};

export const useDeleteReview = () => {
    const queryClient = useQueryClient();

    const deleteReview = async (reviewId: string): Promise<void> => {
        const reviewDocRef = doc(db, "reviews", reviewId);
        await deleteDoc(reviewDocRef);
    };

    return useMutation<void, Error, string>({
        mutationFn: deleteReview,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["reviews"] });
        },
    });
};