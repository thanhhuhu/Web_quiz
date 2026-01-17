import { useEffect, useState } from 'react';
import './css/timer.css';

type Props = {
    total: number;
    onTimeUp: () => void;
};

const Timer: React.FC<Props> = ({ total, onTimeUp }) => {
    const [time, setTime] = useState(total);

    useEffect(() => {
        if (time === 0) {
            onTimeUp();
            return;
        }

        const timer = setTimeout(() => {
            setTime(prev => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [time, onTimeUp]);

    return <div className="timer">⏱ {time}s</div>;
};

export default Timer;
