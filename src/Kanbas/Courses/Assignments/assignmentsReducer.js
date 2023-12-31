import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
  assignment: {
    title: "New Assignment",
    points: 100,
    description: "Assignment Description",
    availableFromDate: "2023-01-10",
    availableUntilDate: "2023-05-15",
    dueDate: "2023-05-15"
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, action) => {
      state.assignments = [{...action.payload}, ...state.assignments,];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    selectAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const {
  addAssignment, deleteAssignment,
  selectAssignment, updateAssignment,
  setAssignments
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;