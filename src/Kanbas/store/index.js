import {configureStore} from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentReducer from "../Courses/Assignments/assignmentsReducer";
import quizReducer from "../Courses/Quizzes/quizzesReducer";
import questionsReducer from "../Courses/Quizzes/Questions/questionsReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentReducer,
    quizReducer,
    questionsReducer
  }
});

export default store;