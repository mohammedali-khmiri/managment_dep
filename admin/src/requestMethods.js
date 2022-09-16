import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGJjM2YyNTQwYjgzNjhhOTAxMzg3MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzA2NTQxNiwiZXhwIjoxNjYzMzI0NjE2fQ.1m5-TvCri7ENrZtU_oIIEKd-mQzjYF26LbTGdLiP4Uk";
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
// 	.currentUser.accessToken;

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: TOKEN },
});
