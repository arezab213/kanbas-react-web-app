import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  quizzes: [],
  quiz: {
    title: "New Quiz",
    points: 100,
    description: "Quiz Description",
    availableFromDate: "2023-01-10",
    availableUntilDate: "2023-05-15",
    dueDate: "2023-05-15",
    published: false,
  },
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    addQuiz: (state, action) => {
      state.quizzes = [{...action.payload}, ...state.quizzes,];
    },
    deleteQuiz: (state, action) => {
      state.quizzes = state.quizzes.filter(
          (quiz) => quiz._id !== action.payload
      );
    },
    updateQuiz: (state, action) => {
      state.quizzes = state.quizzes.map((quiz) => {
        if (quiz._id === action.payload._id) {
          return action.payload;
        } else {
          return quiz;
        }
      });
    },
    selectQuiz: (state, action) => {
      state.quiz = action.payload;
    },
  },
});

export const {
  addQuiz, deleteQuiz,
  selectQuiz, updateQuiz,
  setQuizzes
} = quizzesSlice.actions;

export default quizzesSlice.reducer;