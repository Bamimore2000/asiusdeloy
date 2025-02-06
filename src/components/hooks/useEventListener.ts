import { useEffect } from 'react';

export function useEventListener(eventName: string, handler: EventListener, element: HTMLElement | Window = window) {
    useEffect(() => {
        element.addEventListener(eventName, handler);

        return () => {
            element.removeEventListener(eventName, handler);
        };
    }, [eventName, handler, element]);
}
