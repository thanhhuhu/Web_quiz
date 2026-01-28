import { Schema, model } from "mongoose";

const QuestionSchema = new Schema({
    question: String,
    options: [String],
    answer: Number
});

const QuizSchema = new Schema({
    title: String,
    time: Number,
    questions: [QuestionSchema]
});

export default model("Quiz", QuizSchema);