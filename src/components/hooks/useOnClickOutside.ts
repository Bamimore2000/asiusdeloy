import { useEffect } from "react";

export function useOnClickOutside(
    ref: React.RefObject<HTMLElement>,
    handler: (event: MouseEvent) => void // Explicit function type
) {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler(event);
            }
        };

        document.addEventListener("mousedown", listener);
        return () => document.removeEventListener("mousedown", listener);
    }, [ref, handler]);
}
