import {configureStore} from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentReducer from "../Courses/Assignments/assignmentsReducer";
import quizReducer from "../Courses/Quizzes/quizzesReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentReducer,
    quizReducer
  }
});

export default store;