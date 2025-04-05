export function SwiperCard({ imgSrc, title, text, specialSrc }: { imgSrc: string, title: string, text: string, specialSrc: string }) {

    return (
        <div className="max-w-[1100px] text-center rounded-2xl p-5 mx-auto bg-[#EAF6FF] dark:bg-[transparent] border-2 dark:border-[#0e1553] border-[#2d4796] transitioned shadow-[0px_0px_20px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-6 max-md:flex-col max-md:justify-center">
                <div className="flex flex-col text-left gap-5 max-md:text-center">
                    <div className="flex items-center gap-3 max-md:justify-center">
                        <img className="w-[90px] h-[90px]" src={imgSrc} alt="card img" />
                        <h2 className="third-family font-bold text-[22px] leading-[1.1] dark:text-[#0e2a46] text-[#2d4796] transitioned">{title}</h2>
                    </div>
                    <div className="dark:text-[#0e2a46] text-[#2d4796] transitioned">{text}</div>
                </div>
                {/* Special IMG */}
                <div className="min-w-[400px] h-[300px] bg-amber-50 relative max-md:min-w-full rounded-2xl overflow-hidden">
                    <img className="absolute w-full h-full object-cover rounded-2xl" src={specialSrc} alt="img" />
                </div>
            </div>
        </div>
    )
}