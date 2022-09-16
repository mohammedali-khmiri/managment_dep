import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
	name: "student",
	initialState: {
		students: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		//GET ALL
		getStudentStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		getStudentSuccess: (state, action) => {
			state.isFetching = false;
			state.students = action.payload;
		},
		getStudentFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		//DELETE
		deleteStudentStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		deleteStudentSuccess: (state, action) => {
			state.isFetching = false;
			state.students.splice(
				state.students.findIndex((item) => item._id === action.payload.id),
				1
			);
		},
		deleteStudentFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		//UPDATE
		updateStudentStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		updateStudentSuccess: (state, action) => {
			state.isFetching = false;
			state.students[
				state.students.findIndex((item) => item._id === action.payload.id)
			] = action.payload.student;
		},
		updateStudentFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		//Create
		addStudentStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		addStudentSuccess: (state, action) => {
			state.isFetching = false;
			state.students.push(action.payload);
		},
		addStudentFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
	getStudentStart,
	getStudentSuccess,
	getStudentFailure,
	deleteStudentStart,
	deleteStudentSuccess,
	deleteStudentFailure,
	updateStudentStart,
	updateStudentSuccess,
	updateStudentFailure,
	addStudentStart,
	addStudentSuccess,
	addStudentFailure,
} = studentSlice.actions;

export default studentSlice.reducer;
