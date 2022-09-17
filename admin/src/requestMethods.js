import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGJjM2YyNTQwYjgzNjhhOTAxMzg3MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzQwODgwNSwiZXhwIjoxNjYzNjY4MDA1fQ.fkljq0ahJIzgtJOzxX9q1ACZlWRonyHdI8XdkAEg6pU";

// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
// 	.currentUser.accessToken;

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: TOKEN },
});
