import {Link} from "react-router-dom";
import './css/quizSetCard.css'
type Props = {
    id : number,
    title :string,
    total:number,
}
const QuizSetCard = ({id, title, total}: Props) => {
    return (
        <Link to={`/quiz/${id}`} className="quiz-set-card">
            <h3>{title}</h3>
            <p>{total} questions</p>
        </Link>
    )
}
export default QuizSetCard;
