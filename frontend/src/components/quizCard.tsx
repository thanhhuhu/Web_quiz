import { useState } from 'react';
import './css/quizCard.css';

type Props = {
    data: {
        question: string;
        options: string[];
        answer: number;
    };
    onConfirm: (isCorrect: boolean) => void;
    onNext: () => void;
};

const QuizCard: React.FC<Props> = ({ data, onConfirm, onNext }) => {
    const [selected, setSelected] = useState<number | null>(null);
    const [confirmed, setConfirmed] = useState(false);

    const isCorrect = selected === data.answer;

    const handleConfirm = () => {
        if (selected === null) return;
        setConfirmed(true);
        onConfirm(isCorrect);
    };

    const handleNext = () => {
        setSelected(null);
        setConfirmed(false);
        onNext();
    };

    return (
        <div className="quiz-card">
            <h2>{data.question}</h2>

            {data.options.map((opt, i) => {
                let className = 'option';

                if (confirmed) {
                    if (i === data.answer) className += ' correct';
                    else if (i === selected) className += ' wrong';
                } else if (selected === i) {
                    className += ' selected';
                }

                return (
                    <button
                        key={i}
                        className={className}
                        onClick={() => !confirmed && setSelected(i)}
                    >
                        {opt}
                    </button>
                );
            })}

            {!confirmed ? (
                <button
                    className="confirm-btn"
                    disabled={selected === null}
                    onClick={handleConfirm}
                >
                    Confirm
                </button>
            ) : (
                <button className="next-btn" onClick={handleNext}>
                    Next
                </button>
            )}
        </div>
    );
};

export default QuizCard;
