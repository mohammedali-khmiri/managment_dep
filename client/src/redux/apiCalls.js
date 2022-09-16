import { loginFailure, loginStart, loginSuccess } from "./userRedux";

import { publicRequest } from "../requestMethods";
import {
	RegisterStudentFailure,
	RegisterStudentStart,
	RegisterStudentSuccess,
	loginStudentFailure,
	loginStudentStart,
	loginStudentSuccess,
} from "./studentRedux";
import {
	RegisterTeacherFailure,
	RegisterTeacherStart,
	RegisterTeacherSuccess,
	loginTeacherFailure,
	loginTeacherStart,
	loginTeacherSuccess,
} from "./teacherRedux";

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("/auth/login", user);
		dispatch(loginSuccess(res.data));
	} catch (err) {
		dispatch(loginFailure());
	}
};

//LOGIN STUDENT
export const loginStudent = async (dispatch, student) => {
	dispatch(loginStudentStart());
	try {
		const res = await publicRequest.post("/auth/studentLogin", student);
		dispatch(loginStudentSuccess(res.data));
	} catch (err) {
		dispatch(loginStudentFailure());
	}
};

//Register STUDENT
export const registerStudent = async (student, dispatch) => {
	dispatch(RegisterStudentStart());
	try {
		const res = await publicRequest.post("/auth/studentRegister", student);
		dispatch(RegisterStudentSuccess(res.data));
	} catch (err) {
		dispatch(RegisterStudentFailure());
	}
};

//LOGIN Teacher
export const loginTeacher = async (dispatch, teacher) => {
	dispatch(loginTeacherStart());
	try {
		const res = await publicRequest.post("/auth/teacherLogin", teacher);
		dispatch(loginTeacherSuccess(res.data));
	} catch (err) {
		dispatch(loginTeacherFailure());
	}
};
//Register Teacher
export const registerTeacher = async (teacher, dispatch) => {
	dispatch(RegisterTeacherStart());
	try {
		const res = await publicRequest.post("/auth/teacherRegister", teacher);
		dispatch(RegisterTeacherSuccess(res.data));
	} catch (err) {
		dispatch(RegisterTeacherFailure());
	}
};
