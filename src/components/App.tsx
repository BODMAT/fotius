import { useEffect, useRef } from "react";
import { Footer } from "./Footer";
import { Categories } from "./Categories";
import { FixedHeader } from "./FixedHeader/FixedHeader";
import { Home } from "./Home";
import { Plans } from "./Plans";
import { Address } from "./Address";


import { useThemeStore } from "../store/theme";
import { Reviews } from "./Reviews";
import { MouseImg } from "./MouseImg";

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
        <section>
          <Reviews />
        </section>
        <section ref={section4Ref} id="section4">
          <Address />
        </section>
      </main>
      <Footer />
      <MouseImg />
    </div>
  )
}
