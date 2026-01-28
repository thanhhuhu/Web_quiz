import { Request, Response } from "express";
import Quiz from "../models/quiz";

export const getAllQuizzes = async (req: Request, res: Response) => {
    try {
        const quizzes = await Quiz.find().select("-questions.answer");
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch quizzes" });
    }
};

export const getQuizById = async (req: Request, res: Response) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }
        res.json(quiz);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch quiz" });
    }
};
export const createQuiz = async (req: Request, res: Response) => {
    try {
        const quiz = await Quiz.create(req.body);
        res.status(201).json(quiz);
    } catch (err) {
        res.status(400).json({ message: "Create quiz failed" });
    }
};