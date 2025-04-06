import { useEffect, useState } from "react";
import { auth, provider } from "../lib/firebase";
import { signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth";

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // Логіка для входу користувача
    const login = async () => {
        try {
            await signInWithPopup(auth, provider);
            console.log("Користувач успішно авторизувався.");
        } catch (error) {
            console.error("Помилка при логіні:", error);
        }
    };

    // Логіка для виходу користувача
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Помилка при виході:", error);
        }
    };

    // Слідкуємо за змінами стану авторизації
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        // Очищення підписки на зміну стану авторизації
        return () => {
            unsub();
        };
    }, []);

    return { user, login, logout, loading };
};
