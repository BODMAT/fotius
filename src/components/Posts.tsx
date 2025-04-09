import { useState } from "react"
import { usePosts } from "../hooks/usePosts"
import arrRightSvg from '../assets/arr-right-red.svg';
import arrLeftSvg from '../assets/arr-left-red.svg';

export function Posts() {
    const [page, setPage] = useState(1)
    const { data: posts, error, isPending, isPlaceholderData } = usePosts({ page })
    return (
        <section className="py-10">
            <div className="max-w-[1300px] m-[0_auto] box-content pr-[15px] pl-[15px] flex flex-col gap-2">
                <h4 className="font-family font-normal text-[14px] leading-[2.28571] uppercase text-[#704fe6] dark:text-[#432f8b] transitioned px-5 bg-[#e9e2ff] dark:bg-[#cbbbfe] rounded max-w-[100px] text-center mb-7">
                    Posts:
                </h4>
                {isPending && (<div className="font-family font-normal text-[17px] leading-[1.9] dark:text-[#333931] text-[#2d4796] transitioned">Loading...</div>)}
                {error && (<div className="font-family font-normal text-[17px] leading-[1.9] dark:text-[#333931] text-[#2d4796] transitioned">Error loading: {JSON.stringify(error)}</div>)}
                {posts && posts.map((post) => (
                    <div
                        key={post.id}
                        className={"p-4 border border-[#2d479655] dark:border-[#33393155] rounded-lg shadow-md bg-white dark:bg-[#061c30]" + (isPlaceholderData ? " opacity-70" : "")}
                    >
                        <h3 className="text-xl font-semibold text-[#2d4796] dark:text-[#bfc3ff]">{post.title}</h3>
                        <p className="text-base text-[#333931] dark:text-[#ccc] mt-2">{post.body}</p>
                    </div>
                ))}
                <div className="flex gap-4 justify-center items-center mt-2">
                    <button
                        className={`w-[50px] cursor-pointer hover:scale-105 transitioned`}
                        onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                    >
                        <img src={arrLeftSvg} alt="prev" />
                    </button>
                    <button
                        className={`w-[50px] border-0 cursor-pointer hover:scale-105 transitioned`}
                        onClick={() => setPage(prev => Math.min(prev + 1, 20))}
                    >
                        <img src={arrRightSvg} alt="next" />
                    </button>
                </div>
            </div>
        </section>
    )
}