import { useEffect } from "react";
import { menu } from "./menu";
import { useBurgerMenu } from "../../hooks/useBurgerMenu";

type Props = {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    refs: {
        section1: React.RefObject<HTMLElement | null>;
        section2: React.RefObject<HTMLElement | null>;
        section3: React.RefObject<HTMLElement | null>;
        section4: React.RefObject<HTMLElement | null>;
    };
};

export function FixedHeader({ scrollToSection, refs }: Props) {
    const { isBurgerOpen, toggleBurger, isMobile } = useBurgerMenu();
    //burger no-scroll
    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        if (body) {
            if (isBurgerOpen && isMobile) {
                body.style.overflow = 'hidden';
                body.style.height = '100vh';
            } else {
                body.style.overflow = '';
                body.style.height = '';
            }
        }

        return () => {
            const root = document.getElementById('root');
            if (root) {
                root.style.overflow = '';
                root.style.height = '';
            }
        };
    }, [isBurgerOpen, isMobile]);

    return (
        <header className="relative z-100">
            <div className="fixed w-full h-[100px] dark:bg-[#061c30] bg-[#217ed4] transitioned">
                <div className="max-w-[1300px] m-[0_auto] box-content pr-[15px] pl-[15px]">
                    <div className="flex justify-between gap-4 items-center h-[100px]">
                        <a href="" className="logo">
                            <img className="w-[50px] h-[50px]" src="/logo-white.PNG" alt="logo" />
                        </a>
                        {/* Desktop */}
                        {!isMobile && (
                            <div className="flex gap-10 items-center">
                                {menu.map((item, index) => (
                                    <button
                                        onClick={() => {
                                            const ref = refs[`section${index + 1}` as keyof typeof refs];
                                            if (ref?.current) scrollToSection(ref as React.RefObject<HTMLElement>);
                                        }}
                                        key={index}
                                        className="flex text-[#fff] cursor-pointer hover:scale-105 transition-all duration-300"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        )}
                        {/* Burger */}
                        {isMobile && (
                            <button
                                onClick={() => toggleBurger()}
                                className="group w-[36px] rounded-lg border-0"
                            >
                                <div className="grid justify-items-center gap-1.5">
                                    <span
                                        className={`h-1 w-9 bg-[#fff]  rounded-full transition-all duration-500 ${isBurgerOpen ? "rotate-45 translate-y-2.5" : ""
                                            }`}
                                    ></span>
                                    <span
                                        className={`h-1 w-9 bg-[#fff]  rounded-full transition-all duration-500 ${isBurgerOpen ? "scale-x-0" : ""
                                            }`}
                                    ></span>
                                    <span
                                        className={`h-1 w-9 bg-[#fff] rounded-full transition-all duration-500 ${isBurgerOpen ? "-rotate-45 -translate-y-2.5" : ""
                                            }`}
                                    ></span>
                                </div>
                            </button>
                        )}
                        {/* Burger open */}
                        <div
                            className={`
                                fixed top-[100px] left-0 h-[calc(100vh-100px)] w-full z-50 transition-transform transitioned
                                bg-[#000000c0] t-[#fff]
                                ${isBurgerOpen ? 'translate-x-0' : '-translate-x-full'}
                            `}
                        >
                            <div className="flex flex-col items-center justify-center gap-20 !py-15">
                                {menu.map((item, index) => (
                                    <button
                                        onClick={() => {
                                            toggleBurger();
                                            const ref = refs[`section${index + 1}` as keyof typeof refs];
                                            if (ref?.current) scrollToSection(ref as React.RefObject<HTMLElement>);
                                        }}
                                        key={index}
                                        className="flex text-[#fff] text-3xl cursor-pointer hover:scale-105 transition-all duration-300"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}