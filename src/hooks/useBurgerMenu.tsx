import { useState, useEffect } from 'react';

export const useBurgerMenu = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 560);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 560;
            setIsMobile(mobile);
            if (!mobile) setIsBurgerOpen(false); // Закриваємо меню, якщо більше 560px
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleBurger = () => {
        if (isMobile) {
            setIsBurgerOpen(prev => !prev);
        }
    };

    return { isBurgerOpen, toggleBurger, isMobile };
};
