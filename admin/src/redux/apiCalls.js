import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
	getTeacherFailure,
	getTeacherStart,
	getTeacherSuccess,
	deleteTeacherFailure,
	deleteTeacherStart,
	deleteTeacherSuccess,
	updateTeacherFailure,
	updateTeacherStart,
	updateTeacherSuccess,
	addTeacherFailure,
	addTeacherStart,
	addTeacherSuccess,
} from "./teacherRedux";
import {
	getStudentFailure,
	getStudentStart,
	getStudentSuccess,
	deleteStudentFailure,
	deleteStudentStart,
	deleteStudentSuccess,
	updateStudentFailure,
	updateStudentStart,
	updateStudentSuccess,
	addStudentFailure,
	addStudentStart,
	addStudentSuccess,
} from "./studentRedux";
import {
	getNoteFailure,
	getNoteStart,
	getNoteSuccess,
	deleteNoteFailure,
	deleteNoteStart,
	deleteNoteSuccess,
	updateNoteFailure,
	updateNoteStart,
	updateNoteSuccess,
	addNoteFailure,
	addNoteStart,
	addNoteSuccess,
} from "./noteRedux";

//LOGIN
export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("/auth/login", user);
		dispatch(loginSuccess(res.data));
	} catch (err) {
		dispatch(loginFailure());
	}
};

//GET ALL TEACHERS
export const getTeachers = async (dispatch) => {
	dispatch(getTeacherStart());
	try {
		const res = await publicRequest.get("/teachers");
		dispatch(getTeacherSuccess(res.data));
	} catch (err) {
		dispatch(getTeacherFailure());
	}
};

//DELETE TEACHER
export const deleteTeacher = async (id, dispatch) => {
	dispatch(deleteTeacherStart());
	try {
		const res = await userRequest.delete(`/teachers/${id}`);
		dispatch(deleteTeacherSuccess(res.data));
	} catch (err) {
		dispatch(deleteTeacherFailure());
	}
};
//UPDATE TEACHER
export const updateTeacher = async (id, teacher, dispatch) => {
	dispatch(updateTeacherStart());
	try {
		const res = await userRequest.put(`/teachers/${id}`, teacher);
		dispatch(updateTeacherSuccess(res.data));
	} catch (err) {
		dispatch(updateTeacherFailure());
	}
};

//CREATE
export const addTeacher = async (teacher, dispatch) => {
	dispatch(addTeacherStart());
	try {
		const res = await userRequest.post(`/teachers/addTeacher`, teacher);
		dispatch(addTeacherSuccess(res.data));
	} catch (err) {
		dispatch(addTeacherFailure());
	}
};

//STUDENT*****************

//GET ALL STUDENT
export const getStudents = async (dispatch) => {
	dispatch(getStudentStart());
	try {
		const res = await publicRequest.get("/students");
		dispatch(getStudentSuccess(res.data));
	} catch (err) {
		dispatch(getStudentFailure());
	}
};

//DELETE STUDENT
export const deleteStudent = async (id, dispatch) => {
	dispatch(deleteStudentStart());
	try {
		const res = await userRequest.delete(`/students/${id}`);
		dispatch(deleteStudentSuccess(res.data));
	} catch (err) {
		dispatch(deleteStudentFailure());
	}
};
//UPDATE STUDENT
export const updateStudent = async (id, student, dispatch) => {
	dispatch(updateStudentStart());
	try {
		const res = await userRequest.put(`/students/${id}`, student);
		dispatch(updateStudentSuccess(res.data));
	} catch (err) {
		dispatch(updateStudentFailure());
	}
};


//CREATE STUDENT
export const addStudent = async (student, dispatch) => {
	dispatch(addStudentStart());
	try {
		const res = await userRequest.post(`/students/addStudent`, student);
		dispatch(addStudentSuccess(res.data));
	} catch (err) {
		dispatch(addStudentFailure());
	}
};

//NOTE*******************

//GET ALL NOTE
export const getNotes = async (dispatch) => {
	dispatch(getNoteStart());
	try {
		const res = await publicRequest.get("/notes");
		dispatch(getNoteSuccess(res.data));
	} catch (err) {
		dispatch(getNoteFailure());
	}
};

//DELETE NOTE
export const deleteNote = async (id, dispatch) => {
	dispatch(deleteNoteStart());
	try {
		const res = await userRequest.delete(`/notes/${id}`);
		dispatch(deleteNoteSuccess(res.data));
	} catch (err) {
		dispatch(deleteNoteFailure());
	}
};
//UPDATE NOTE
export const updateNote = async (id, note, dispatch) => {
	dispatch(updateNoteStart());
	try {
		const res = await userRequest.put(`/notes/${id}`, note);
		dispatch(updateNoteSuccess(res.data));
	} catch (err) {
		dispatch(updateNoteFailure());
	}
};

//CREATE NOTE
export const addNote = async (note, dispatch) => {
	dispatch(addNoteStart());
	try {
		const res = await userRequest.post(`/notes/addNote`, note);
		dispatch(addNoteSuccess(res.data));
	} catch (err) {
		dispatch(addNoteFailure());
	}
};
