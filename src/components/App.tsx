import { useEffect, useRef } from "react";
import { Footer } from "./Footer";
import { Categories } from "./Categories";
import { FixedHeader } from "./FixedHeader/FixedHeader";
import { Home } from "./Home";
import { Plans } from "./Plans";
import { Address } from "./Address";

import bookSvg from "../assets/book.svg"
import headSvg from "../assets/head.svg"
import starSvg from "../assets/star.svg"
import useMouseMovement from "../hooks/useMouseMovement";
import { useThemeStore } from "../store/theme";

export function App() {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);

  const scrollToSection = (ref: any) => {
    const headerHeight = 100; // висота фіксованої шапки
    const elementPosition = ref.current.offsetTop;
    const offsetPosition = elementPosition - headerHeight;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const { x, y } = useMouseMovement();

  const getMovement = (sensitivity: number) => {
    const moveX = ((x - window.innerWidth / 2) / window.innerWidth) * sensitivity;
    const moveY = ((y - window.innerHeight / 2) / window.innerHeight) * sensitivity;
    return { transform: `translate(${moveX}px, ${moveY}px)` };
  };

  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  return (
    <div className="relative min-h-[100vh] overflow-hidden flex flex-col bg-[#0c26301a] transitioned dark:bg-[#2b335876] font-[Sora] font-normal text-[17px]">
      <FixedHeader
        scrollToSection={scrollToSection}
        refs={{
          section1: section1Ref,
          section2: section2Ref,
          section3: section3Ref,
          section4: section4Ref,
        }}
      />
      <main className="!pt-[100px]">
        <section ref={section1Ref} id="section1">
          <Home />
        </section>
        <section ref={section2Ref} id="section2">
          <Categories />
        </section>
        <section ref={section3Ref} id="section3">
          <Plans />
        </section>
        <section ref={section4Ref} id="section4">
          <Address />
        </section>
      </main>
      <Footer />

      {/* book img */}
      <div className="absolute w-[155px] h-[155px] top-[40%] right-[4%] z-[-1]" style={getMovement(20)}>
        <img className="w-full h-full object-contain" src={bookSvg} alt="book" />
      </div>
      {/* head img */}
      <div className="absolute w-[155px] h-[155px] top-[60%] left-[4%] z-[-1]" style={getMovement(70)}>
        <img className="w-full h-full object-contain" src={headSvg} alt="head" />
      </div>
      {/* star img */}
      <div className="absolute w-[55px] h-[55px] top-[80%] right-[4%] z-[-1]" style={getMovement(40)}>
        <img className="w-full h-full object-contain" src={starSvg} alt="star" />
      </div>
    </div>
  )
}
