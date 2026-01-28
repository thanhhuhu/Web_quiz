import { useNavigate } from "react-router-dom";
import './css/homePage.css'
interface Props {
    id: string;
    title: string;
    total: number;
    time: string;
}

const QuizSetCard: React.FC<Props> = ({ id, title, total, time }) => {
    const navigate = useNavigate();

    return (
        <div className="quiz-set-card" onClick={() => navigate(`/quiz/${id}`)}>
            <h3>{title}</h3>
            <p>{total} questions</p>
            <p>{time}</p>
            <div className={"start-btn"}>Start</div>
        </div>
    );
};

export default QuizSetCard;
