import { useMap } from "../hooks/useMap";
export function Address() {
    const mapContainerRef = useMap({
        lat: 49.45397859476824, // координати ЧНУ
        lng: 32.04612327186772,
        zoom: 16,
        markerLat: 49.45397859476824,
        markerLng: 32.04612327186772,
        popupContent: "<b>ЧНУ ім. Б. Хмельницького</b><br>бульв. Шевченка, 81, Черкаси",
    });
    return (
        <section className="!py-10">
            <div className="!max-w-[1300px] !m-[0_auto] !box-content !pr-[15px] !pl-[15px] flex flex-col gap-5">
                <h4 className="font-family font-normal text-[14px] leading-[2.28571] uppercase text-center text-[#704fe6] dark:text-[#432f8b] transitioned px-5 bg-[#e9e2ff] dark:bg-[#cbbbfe] rounded max-w-[150px] !mb-[10px]">Address:</h4>
                {/* Map with ref */}
                <div ref={mapContainerRef} className="relative z-5 h-[571px] md:h-[500px] sm:h-[400px] xs:h-[350px] xxs:h-[300px] rounded-2xl" />
            </div>
        </section>
    )
}