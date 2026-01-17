import { Routes, Route } from 'react-router-dom';
import {HomePage} from "./pages/homePage.tsx";
import QuizPage from "./pages/quizPage.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz/:quizId" element={<QuizPage />} />
        </Routes>
    );
}

export default App;
