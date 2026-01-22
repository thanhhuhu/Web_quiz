import {useNavigate, useParams} from 'react-router-dom';
import { useState } from 'react';
import { quizzes } from '../data/quizzes';
import QuizCard from "../components/quizCard.tsx";
import Timer from "../components/timer.tsx";
import './css/quizPage.css'
import {Button} from "antd";
import {FaHome} from "react-icons/fa";
import {Progress} from "antd";
import {GrScorecard} from "react-icons/gr";
import QuizResult from "./quizResult.tsx";
const QuizPage: React.FC = () => {
    const { quizId } = useParams<{ quizId: string }>();
    const quiz = quizzes.find(q => q.id === Number(quizId));

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    if (!quiz) return <h2>❌ Quiz can not be found</h2>;

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

            <Timer total={600} onTimeUp={() => setCurrent(quiz.questions.length)} />

            <div className="quiz-status">
                <div className={"score"}>
                    <GrScorecard /> Score : {score} / {quiz.questions.length}
                </div>
                <Progress
                    percent ={Math.round((
                        current/quiz.questions.length)* 100
                    )}
                    showInfo
                    status={"active"}
                />
            </div>
            <QuizCard
                data={quiz.questions[current]}
                onConfirm={handleConfirm}
                onNext={handleNext}
            />
            <Button
                type="primary"
                className={"button-home"}
                onClick={() => navigate("/")}
            >
                <FaHome />Home
            </Button>
        </div>
    );

};

export default QuizPage;
