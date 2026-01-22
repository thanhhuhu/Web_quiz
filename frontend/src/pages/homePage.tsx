import QuizSetCard from "./quizSetCard.tsx";
import './css/homePage.css'
const quizSets = [
    {id: 1, title: 'React basic', total: 10, time : '10 minutes'},
    {id: 2, title: 'TypeScript basic', total: 10, time : '10 minutes'},
    {id: 3, title: 'NodeJS basic', total: 10, time : '10 minutes'},
    {id: 4, title: 'JavaScript basic', total: 10, time : '10 minutes'},
    {id: 5, title: 'HTML & CSS basic', total: 10, time : '10 minutes'},
    {id: 6, title: 'Git & GitHub basic', total: 10, time : '10 minutes'},
]
const HomePage = () => {
    return (
        <div className={"home"}>
            <h1>Choose a set list question</h1>
            <div className={"quiz-set-list"}>
                {quizSets.map(q => (
                    <QuizSetCard  key={q.id} {...q}/>
                ))
                }
            </div>
            <div className="end-bar">
                <p>Made with ❤️ by Thanhhuhu </p>
            </div>
        </div>
    )
}
export {HomePage};