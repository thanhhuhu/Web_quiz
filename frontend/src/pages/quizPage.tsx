import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { quizzes } from '../data/quizzes';
import QuizCard from "../components/quizCard.tsx";
import Timer from "../components/timer.tsx";

const QuizPage: React.FC = () => {
    const { quizId } = useParams<{ quizId: string }>();
    const quiz = quizzes.find(q => q.id === Number(quizId));

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);

    if (!quiz) return <h2>❌ Không tìm thấy quiz</h2>;

    const handleConfirm = (isCorrect: boolean) => {
        if (isCorrect) setScore(s => s + 1);
    };

    const handleNext = () => {
        setCurrent(c => c + 1);
    };

    if (current >= quiz.questions.length) {
        return (
            <div style={{ textAlign: 'center' }}>
                <h2>🎉 Hoàn thành: {quiz.title}</h2>
                <p>Điểm: {score} / {quiz.questions.length}</p>
            </div>
        );
    }

    return (
        <div>
            <Timer total={60} onTimeUp={() => setCurrent(quiz.questions.length)} />

            <p>
                Câu {current + 1} / {quiz.questions.length}
            </p>

            <QuizCard
                data={quiz.questions[current]}
                onConfirm={handleConfirm}
                onNext={handleNext}
            />
        </div>
    );
};

export default QuizPage;
