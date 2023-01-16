import { useEffect, useState } from "react";

export default function useProgress(animate, time) {
    let [progress, setProgress] = useState(0);

    useEffect(() => {
        if (animate) {
            let rafId = null;
            let start = null;
            let step = timeStamp => {
                if (!start) start = timeStamp;
                let progress = timeStamp - start;
                setProgress(progress);
                if (progress < time) {
                    rafId = requestAnimationFrame(step);
                }
            };
            rafId = requestAnimationFrame(step);
            return () => cancelAnimationFrame(rafId);
        }
    }, [animate, time]);

    return animate ? Math.min(progress / time, time) : 0;
}