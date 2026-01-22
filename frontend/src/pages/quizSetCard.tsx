import {Link} from "react-router-dom";
import './css/quizSetCard.css'
type Props = {
    id : number,
    title :string,
    total:number,
    time: string,
}
const QuizSetCard = ({id, title, total, time}: Props) => {
    return (
        <Link to={`/quiz/${id}`} className="quiz-set-card">
            <h3>{title}</h3>
            <p>{total} questions</p>
            <p>{time}</p>
        </Link>
    )
}
export default QuizSetCard;
