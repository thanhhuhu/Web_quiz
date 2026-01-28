import { Progress, Button } from "antd";
import { FaHome, FaRedo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./css/quizResult.css";

interface QuizResultProps {
    title: string;
    score: number;
    total: number;
}

const QuizResult: React.FC<QuizResultProps> = ({ title, score, total }) => {
    const navigate = useNavigate();
    const [showConfetti, setShowConfetti] = useState(false);
    const percent = Math.round((score / total) * 100);

    useEffect(() => {
        // Show confetti for excellent scores
        if (percent >= 80) {
            setShowConfetti(true);
            const timer = setTimeout(() => setShowConfetti(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [percent]);

    const getMessage = () => {
        if (percent >= 80) return {
            text: "🔥 Excellent! You are a quiz master!",
            type: "excellent"
        };
        if (percent >= 50) return {
            text: "👍 Good job! Keep practicing!",
            type: "good"
        };
        return {
            text: "💪 Don't give up! Try again to improve!",
            type: "retry"
        };
    };

    const getStrokeColor = () => {
        if (percent >= 80) return "#52c41a";
        if (percent >= 50) return "#faad14";
        return "#ff4d4f";
    };

    const message = getMessage();

    return (
        <div className="result-page">
            {showConfetti && (
                <>
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="confetti"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                background: ['#667eea', '#764ba2', '#52c41a', '#faad14'][Math.floor(Math.random() * 4)]
                            }}
                        />
                    ))}
                </>
            )}

            <div className="result-container">
                <h1>🎉 Quiz Completed!</h1>
                <h2>{title}</h2>

                <div className="result-score">
                    🏆 Your Score: <span>{score} / {total}</span>
                </div>

                <div className="progress-container">
                    <Progress
                        type="circle"
                        percent={percent}
                        strokeColor={getStrokeColor()}
                        strokeWidth={8}
                        width={180}
                        format={(percent) => (
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', textAlign:'center' }}>
                                {percent}%
                            </div>
                        )}
                    />
                </div>

                <p className={`result-message ${message.type}`}>
                    {message.text}
                </p>

                <div className="result-stats">
                    <div className="stat-item">
                        <div className="stat-value">{score}</div>
                        <div className="stat-label">Correct</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">{total - score}</div>
                        <div className="stat-label">Incorrect</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">{percent}%</div>
                        <div className="stat-label">Accuracy</div>
                    </div>
                </div>

                <div className="result-actions">
                    <Button
                        type="primary"
                        icon={<FaRedo />}
                        onClick={() => navigate(0)}
                    >
                        Retry Quiz
                    </Button>

                    <Button
                        icon={<FaHome />}
                        onClick={() => navigate("/")}
                    >
                        Back to Home
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default QuizResult;