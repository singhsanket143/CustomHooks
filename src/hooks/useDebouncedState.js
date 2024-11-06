import { useEffect, useState } from "react";

export default function useDebouncedState(initialValue, delay) {

    const [state, setState] = useState(initialValue);
    const [debouncedState, setDebouncedState] = useState(initialValue);

    useEffect(() => {

        const handler = setTimeout(() => {
            setDebouncedState(state);
        }, 0);


        return () => {
            clearTimeout(handler);
        }


    }, [state, delay]); // ma ,, t=3


    return [debouncedState, setState];

}
