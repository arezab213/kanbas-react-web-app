import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  question: {
    title: "New Question Title",
    question: "New Question Description",
    points: 10,
    questionType: "MC",
    options: [
      {
        text: "Question 1",
        isCorrect: true,
      },
      {
        text: "Question 2",
        isCorrect: false,
      },
      {
        text: "Question 3",
        isCorrect: false,
      },
      {
        text: "Question 4",
        isCorrect: false,
      },
    ]
  },
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    addQuestion: (state, action) => {
      state.questions = [{...action.payload}, ...state.questions,];
    },
    deleteQuestion: (state, action) => {
      state.questions = state.questions.filter(
          (question) => question._id !== action.payload
      );
    },
    updateQuestion: (state, action) => {
      state.questions = state.questions.map((question) => {
        if (question._id === action.payload._id) {
          return action.payload;
        } else {
          return question;
        }
      });
    },
    selectQuestion: (state, action) => {
      state.question = action.payload;
    },
  },
});

export const {
  addQuestion, deleteQuestion,
  selectQuestion, updateQuestion,
  setQuestions
} = questionsSlice.actions;

export default questionsSlice.reducer;