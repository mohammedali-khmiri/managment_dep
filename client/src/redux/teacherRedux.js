import { createSlice } from "@reduxjs/toolkit";

export const teacherSlice = createSlice({
	name: "teacher",
	initialState: {
		teachers: [],
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		//Register Teacher
		RegisterTeacherStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		RegisterTeacherSuccess: (state, action) => {
			state.isFetching = false;
			state.teachers.push(action.payload);
		},
		RegisterTeacherFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		//login teacher
		loginTeacherStart: (state) => {
			state.isFetching = true;
		},
		loginTeacherSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		loginTeacherFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
	RegisterTeacherStart,
	RegisterTeacherSuccess,
	RegisterTeacherFailure,
	loginTeacherStart,
	loginTeacherSuccess,
	loginTeacherFailure,
} = teacherSlice.actions;

export default teacherSlice.reducer;
