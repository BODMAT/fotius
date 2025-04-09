import { useReviews, useAddReview, useDeleteReview } from "../hooks/useReviews";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { Timestamp } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
import arrRightSvg from '../assets/arr-right-red.svg';
import arrLeftSvg from '../assets/arr-left-red.svg';
import { useRef } from "react";

export function Reviews() {
    const { user } = useAuth();
    const { data: reviews = [], refetch } = useReviews();
    const { mutateAsync: addReview } = useAddReview();
    const { mutateAsync: deleteReview } = useDeleteReview();
    const [text, setText] = useState("");

    const handleSubmit = async () => {
        if (!user) return alert("Only an authorized user can write a review");
        if (!text.trim()) return alert("Feedback cannot be empty!");
        const formattedText = text.replace(/\n/g, '\n');
        await addReview({
            text: formattedText,
            userId: user.uid,
            userName: user.displayName || "Anonymous",
            userPhotoURL: user.photoURL || "",
        });
        setText("");
    };

    const handleDelete = async (reviewId: string) => {
        if (confirm("Are you sure you want to delete the review?")) {
            await deleteReview(reviewId);
            refetch();
        }
    };

    const formatDate = (date: any): string => {
        if (date instanceof Timestamp) {
            date = date.toDate();
        }

        if (!(date instanceof Date)) {
            return "Invalid date format";
        }

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    };

    const swiperRef = useRef<any>(null);
    return (
        <section className="py-10">
            <div className="max-w-[1300px] m-[0_auto] box-content pr-[15px] pl-[15px] flex flex-col gap-5">
                <h1 className="third-family font-bold text-[35px] leading-[1.3] capitalize dark:text-[#0e2a46] text-[#2d4796] transitioned max-w-[90%]">Reviews:</h1>
                <div className="flex items-center gap-4 max-sm:gap-2">
                    <textarea placeholder="Write your review..." className="bg-[#fff] resize-none rounded w-full p-2 max-sm:h-[100px] scrollable" value={text} onChange={(e) => setText(e.target.value)} />
                    <button className="w-[150px] flex p-[5px_50px] justify-center items-center font-family font-normal text-[15px] leading-[3.86667] tracking-[-0.01em] capitalize text-white rounded-3xl dark:bg-[#17254e] bg-[#2d4796] border-2 dark:border-[#17254e] border-[#2d4796] hover:bg-transparent hover:text-[#17254e] transitioned max-lg:m-[0_auto] cursor-pointer max-sm:w-[100px]" onClick={handleSubmit}>Send</button>
                </div>
                {reviews.length > 0 && (<div className="flex gap-6 w-full items-center max-sm:flex-col-reverse">
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={20}
                        breakpoints={{
                            768: {
                                slidesPerView: 1,
                            },
                            769: {
                                slidesPerView: 2,
                            },
                        }}
                        className="w-full mx-1"
                    >
                        {reviews.map((r) => {
                            return (
                                <SwiperSlide key={r.id}>
                                    <div className="p-4 border-2 rounded-xl dark:border-[#0e2a46] border-[#2d4796] transitioned overflow-hidden">
                                        <div className="flex items-start justify-between gap-1">
                                            <div className="flex items-center gap-4 mb-3">
                                                {/* new Date() чтобы исключить кэширование */}
                                                <img
                                                    src={`${r.userPhotoURL}?t=${new Date().getTime()}`}
                                                    alt={r.userName}
                                                    className="w-10 h-10 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="dark:text-[#0e2a46] text-[#2d4796] transitioned font-semibold">{r.userName}</p>
                                                    <p className="text-sm text-gray-500">{formatDate(r.createdAt)}</p>
                                                </div>
                                            </div>

                                            {/* del */}
                                            {user?.uid === r.userId && (
                                                <button
                                                    className="dark:text-[#0e2a46] text-[#2d4796] transitioned text-5xl cursor-pointer hover:scale-110"
                                                    onClick={() => handleDelete(r.id)}
                                                >×</button>
                                            )}
                                        </div>
                                        <p className="dark:text-[#0e2a46] text-[#2d4796] transitioned scrollable"
                                            style={{
                                                whiteSpace: 'pre-wrap',
                                            }}>{r.text}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}

                    </Swiper>
                    <div className="flex justify-evenly gap-3 border-0 w-[150px]">
                        <button
                            className={`w-[50px] cursor-pointer swiper-button-prev hover:scale-105 transitioned`}
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                        >
                            <img src={arrLeftSvg} alt="prev" />
                        </button>
                        <button
                            className={`w-[50px] border-0 cursor-pointer swiper-button-next hover:scale-105 transitioned`}
                            onClick={() => swiperRef.current.swiper.slideNext()}
                        >
                            <img src={arrRightSvg} alt="next" />
                        </button>
                    </div>
                </div>)}

            </div>
        </section>
    );
}
