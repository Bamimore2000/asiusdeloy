import { useState, useEffect } from 'react';

interface WindowSize {
    width: number | undefined;
    height: number | undefined;
}

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call it initially to set size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowSize;
}
