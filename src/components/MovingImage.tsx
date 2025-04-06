import React from 'react';

interface MovingImageProps {
    src: string;
    alt: string;
    movementStyle: React.CSSProperties;
    size: string;
}

export const MovingImage: React.FC<MovingImageProps> = React.memo(({ src, alt, movementStyle, size }) => {
    return (
        <div className={`absolute ${size} z-[-1]`} style={movementStyle}>
            <img className="w-full h-full object-contain" src={src} alt={alt} />
        </div>
    );
});
