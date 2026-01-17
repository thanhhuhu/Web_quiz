import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/quizzes', (req, res) => {
    res.json([
        {
            id: 1,
            question: 'TypeScript là gì?',
            options: ['Ngôn ngữ', 'Framework', 'Database'],
            answer: 0
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Backend is running at http://localhost:${PORT}`);
});
