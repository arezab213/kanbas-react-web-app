import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const QUESTIONS_URL = `${API_BASE}/questions`;
const QUIZZES_URL = `${API_BASE}/quizzes`;

export const updateQuestion = async (question) => {
  const response = await axios.put(`${QUESTIONS_URL}/${question._id}`,
      question);
  return response.data;
};

export const deleteQuestion = async (questionId) => {
  const response = await axios
  .delete(`${QUESTIONS_URL}/${questionId}`);
  return response.data;
};

export const findQuestionsForQuiz = async (quizId) => {
  const response = await axios
  .get(`${QUIZZES_URL}/${quizId}/questions`);
  return response.data;
};

export const findQuestionById = async (questionId) => {
  const response = await axios.get(`${QUESTIONS_URL}/${questionId}`);
  return response.data;
};

export const createQuestion = async (quizId, question) => {
  const response = await axios.post(
      `${QUIZZES_URL}/${quizId}/questions/`,
      question
  );
  return response.data;
};
