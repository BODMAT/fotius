import { SwitchTheme } from "./SwitchTheme";

export function Footer() {
    return (
        <footer className="py-10 w-full min-h-[100px] dark:bg-[#061c30] bg-[#1c6ebb] transitioned">
            <div className="max-w-[1300px] m-[0_auto] !box-content px-[15px] flex flex-col gap-5 text-[#fff]  h-full">
                <div className="flex justify-between items-center gap-6 h-full max-md:flex-col-reverse max-md:justify-center max-md:items-center max-md:text-center">
                    <div className="text-center">Copyright © ...–2025  Faculty of Computer Engineering, Intelligent and Control Systems</div>
                    <SwitchTheme />
                </div>
            </div>
        </footer>
    )
}