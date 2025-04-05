export function Home() {
    return (
        <section className="relative overflow-hidden py-10">
            <div className="max-w-[1300px] m-[0_auto] box-content pr-[15px] pl-[15px]">
                <div className="flex justify-beetwen items-center gap-5 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:text-center max-lg:m-[0_auto]">
                    <div className="flex flex-col justify-center  gap-[5px]">
                        <h2 className="font-family font-normal text-[17px] leading-[1.88235] uppercase text-[#704fe6] dark:text-[#44308c] transitioned">Welcome to Fotius</h2>
                        <h1 className="third-family font-bold text-[60px] leading-[1.2] capitalize dark:text-[#17254e] text-[#2d4796] transitioned max-sm:text-[40px]">Achieving Your Dreams Through Education</h1>
                        <h3 className="font-family font-normal text-[15px] leading-[1.9] dark:text-[#333931] text-[#788673] transitioned max-w-[450px] max-lg:max-w-full">We are a faculty of skilled programmers, dedicated to providing top-tier education and fostering success in the ever-evolving world of programming. Our innovative approach prepares students for the challenges of the digital future.</h3>
                        <a href="https://fotius.cdu.edu.ua/" target="_blank" className="max-w-[200px] flex !p-[5px_50px] justify-center items-center font-family font-normal text-[15px] leading-[3.86667] tracking-[-0.01em] capitalize text-white rounded-3xl dark:bg-[#17254e] bg-[#2d4796] border-2 dark:border-[#17254e] border-[#2d4796] hover:bg-transparent hover:text-[#17254e] transitioned max-lg:m-[0_auto]">More Info</a>
                    </div>
                    <div className="w-full">
                        <img className="rounded-2xl" src="/home.jpg" alt="home" />
                    </div>
                </div>
            </div>
            {/* bg img */}
            <div className="absolute w-full h-full top-0 left-0 z-[-1]">
                <img className="w-full h-full object-cover" src="/main-bg.png" alt="bg" />
            </div>
        </section>
    )
}