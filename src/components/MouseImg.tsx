import bookSvg from "../assets/book.svg"
import headSvg from "../assets/head.svg"
import starSvg from "../assets/star.svg"
import useMouseMovement from "../hooks/useMouseMovement";
export function MouseImg() {
    const { x, y } = useMouseMovement();

    const getMovement = (sensitivity: number) => {
        const moveX = ((x - window.innerWidth / 2) / window.innerWidth) * sensitivity;
        const moveY = ((y - window.innerHeight / 2) / window.innerHeight) * sensitivity;
        return { transform: `translate(${moveX}px, ${moveY}px)` };
    };
    return (
        <>
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
        </>
    )
}