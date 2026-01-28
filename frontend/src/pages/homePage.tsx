import QuizSetCard from "./quizSetCard";
import "./css/homePage.css";
import { useEffect, useState } from "react";

interface QuizSet {
    _id: string;
    title: string;
    time: number;
    questions: any[];
}

const HomePage = () => {
    const [quizSets, setQuizSets] = useState<QuizSet[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/api/quizzes")
            .then(res => res.json())
            .then(data => {
                console.log("QUIZZES FROM API:", data);
                setQuizSets(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="home">
            <h1>Choose Your Quiz Challenge</h1>

            {loading ? (
                <div className="loading-container">
                    <p>🎯 Loading amazing quizzes...</p>
                </div>
            ) : quizSets.length === 0 ? (
                <div className="empty-state">
                    <h2>📚 No Quizzes Available</h2>
                    <p>Check back soon for new challenges!</p>
                </div>
            ) : (
                <div className="quiz-set-list">
                    {quizSets.map(q => (
                        <QuizSetCard
                            key={q._id}
                            id={q._id}
                            title={q.title}
                            total={q.questions.length}
                            time={`${q.time / 60} min`}
                        />
                    ))}
                </div>
            )}

            <div className="end-bar">
                <p>Made with ❤️ by Thanhhuhu</p>
            </div>
        </div>
    );
};

export { HomePage };