import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Review } from "../types";
import { getDocs, query, orderBy } from "firebase/firestore";

const reviewsRef = collection(db, "reviews");

export const addReview = async (review: Omit<Review, "id" | "createdAt">) => {
    await addDoc(reviewsRef, {
        ...review,
        createdAt: serverTimestamp(),
    });
};
export const fetchReviews = async (): Promise<Review[]> => {
    const q = query(reviewsRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    })) as Review[];
};