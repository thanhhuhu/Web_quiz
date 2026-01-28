import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import QuizCard from "../components/quizCard";
import Timer from "../components/timer";
import "./css/quizPage.css";
import { Button, Progress } from "antd";
import { FaHome } from "react-icons/fa";
import { GrScorecard } from "react-icons/gr";
import QuizResult from "./quizResult";

interface Question {
    question: string;
    options: string[];
    answer: number;
}

interface Quiz {
    _id: string;
    title: string;
    time: number;
    questions: Question[];
}

const QuizPage: React.FC = () => {
    const { quizId } = useParams<{ quizId: string }>();
    const navigate = useNavigate();

    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/api/quizzes/${quizId}`)
            .then(res => res.json())
            .then(data => {
                setQuiz(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [quizId]);

    if (loading) return <p style={{ textAlign: "center" }}>Loading quiz...</p>;
    if (!quiz) return <h2>❌ Quiz not found</h2>;

    const handleConfirm = (isCorrect: boolean) => {
        if (isCorrect) setScore(s => s + 1);
    };

    const handleNext = () => {
        setCurrent(c => c + 1);
    };

    if (current >= quiz.questions.length) {
        return (
            <QuizResult
                title={quiz.title}
                score={score}
                total={quiz.questions.length}
            />
        );
    }

    return (
        <div className="quiz-page">
            <Timer total={quiz.time} onTimeUp={() => setCurrent(quiz.questions.length)} />

            <div className="quiz-status">
                <div className="score">
                    <GrScorecard /> Score : {score} / {quiz.questions.length}
                </div>
                <Progress
                    percent={Math.round((current / quiz.questions.length) * 100)}
                    status="active"
                />
            </div>

            <QuizCard
                data={quiz.questions[current]}
                onConfirm={handleConfirm}
                onNext={handleNext}
            />

            <Button
                type="primary"
                className="button-home"
                onClick={() => navigate("/")}
            >
                <FaHome /> Home
            </Button>
        </div>
    );
};

export default QuizPage;
