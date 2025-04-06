import { useAuth } from "../hooks/useAuth"

export function Auth() {
    const { user, login, logout } = useAuth();
    return (
        <>
            {user && (
                <button onClick={() => { logout() }} className="max-w-[250px] flex !p-[5px_50px] justify-center items-center font-family font-normal leading-[1.86667] tracking-[-0.01em] capitalize text-white rounded-3xl bg-[transparent] border-2 border-[#fff] hover:bg-[#fff] hover:text-[#17254e] transitioned max-lg:m-[0_auto] cursor-pointer flex-col"><p>Sign out</p><p className="text-[10px]">{user.displayName}</p></button>
            )}
            {!user && (
                <button onClick={() => { login() }} className="max-w-[250px] flex !p-[5px_50px] justify-center items-center font-family font-normal leading-[3.86667] tracking-[-0.01em] capitalize text-white rounded-3xl bg-[transparent] border-2 border-[#fff] hover:bg-[#fff] hover:text-[#17254e] transitioned max-lg:m-[0_auto] cursor-pointer">Sign in</button>
            )}
        </>
    )
}