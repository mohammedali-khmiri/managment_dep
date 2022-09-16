import { createSlice } from "@reduxjs/toolkit";

export const teacherSlice = createSlice({
	name: "teacher",
	initialState: {
		teachers: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		//GET ALL
		getTeacherStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		getTeacherSuccess: (state, action) => {
			state.isFetching = false;
			state.teachers = action.payload;
		},
		getTeacherFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		//DELETE
		deleteTeacherStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		deleteTeacherSuccess: (state, action) => {
			state.isFetching = false;
			state.teachers.splice(
				state.teachers.findIndex((item) => item._id === action.payload.id),
				1
			);
		},
		deleteTeacherFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		//UPDATE
		updateTeacherStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		updateTeacherSuccess: (state, action) => {
			state.isFetching = false;
			state.teachers[
				state.teachers.findIndex((item) => item._id === action.payload.id)
			] = action.payload.teacher;
		},
		updateTeacherFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		//Create
		addTeacherStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		addTeacherSuccess: (state, action) => {
			state.isFetching = false;
			state.teachers.push(action.payload);
		},
		addTeacherFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
	getTeacherStart,
	getTeacherSuccess,
	getTeacherFailure,
	deleteTeacherStart,
	deleteTeacherSuccess,
	deleteTeacherFailure,
	updateTeacherStart,
	updateTeacherSuccess,
	updateTeacherFailure,
	addTeacherStart,
	addTeacherSuccess,
	addTeacherFailure,
} = teacherSlice.actions;

export default teacherSlice.reducer;
