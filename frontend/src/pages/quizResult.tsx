import { Progress, Button } from "antd";
import { FaHome, FaRedo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./css/quizResult.css";

interface QuizResultProps {
    title: string;
    score: number;
    total: number;
}

const QuizResult: React.FC<QuizResultProps> = ({ title, score, total }) => {
    const navigate = useNavigate();
    const percent = Math.round((score / total) * 100);

    const getMessage = () => {
        if (percent >= 80) return "🔥 Excellent! You are very good!";
        if (percent >= 50) return "👍 Good job! Keep practicing!";
        return "💪 Don't give up! Try again!";
    };

    return (
        <div className="result-page">
            <h1>🎉 Quiz Completed</h1>
            <h2>{title}</h2>

            <div className="result-score">
                🏆 Score: {score} / {total}
            </div>

            <Progress
                type="circle"
                percent={percent}
                strokeColor={
                    percent >= 80 ? "#52c41a" :
                        percent >= 50 ? "#faad14" :
                            "#ff4d4f"
                }
            />
            <p className="result-message">{getMessage()}</p>

            <div className="result-actions">
                <Button
                    type="primary"
                    icon={<FaRedo />}
                    onClick={() => navigate(0)}
                >
                    Retry
                </Button>

                <Button
                    icon={<FaHome />}
                    onClick={() => navigate("/")}
                >
                    Home
                </Button>

            </div>
        </div>
    );
};

export default QuizResult;
