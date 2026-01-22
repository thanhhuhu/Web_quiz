import QuizSetCard from "./quizSetCard.tsx";
import './css/homePage.css'
const quizSets = [
    {id: 1, title: 'React basic', total: 10},
    {id: 2, title: 'TypeScript basic', total: 8},
    {id: 3, title: 'NodeJS basic', total: 12},

]
const HomePage = () => {
    return (
        <div className={"home"}>
            <h1>Choose a set list question</h1>
            <div className={"quiz-set-list"}>
                {quizSets.map(q => (
                    <QuizSetCard key={q.id}{...q}/>
                ))
                }
            </div>
        </div>
    )
}
export {HomePage};