import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
	name: "student",
	initialState: {
		students: [],
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		//Register Student
		RegisterStudentStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		RegisterStudentSuccess: (state, action) => {
			state.isFetching = false;
			state.students.push(action.payload);
		},
		RegisterStudentFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		//login student
		loginStudentStart: (state) => {
			state.isFetching = true;
		},
		loginStudentSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		loginStudentFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
	RegisterStudentStart,
	RegisterStudentSuccess,
	RegisterStudentFailure,
	loginStudentStart,
	loginStudentSuccess,
	loginStudentFailure,
} = studentSlice.actions;

export default studentSlice.reducer;
