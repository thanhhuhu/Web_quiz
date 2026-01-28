import { Router } from "express";
import {createQuiz, getAllQuizzes, getQuizById} from "../controllers/quizController";

const router = Router();

router.get("/", getAllQuizzes);
router.get("/:id", getQuizById);
router.post("/", createQuiz);
export default router;
