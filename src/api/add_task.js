// Call: POST /api/todo/add
import axios from 'axios';
const hostUrl = 'https://todo-exercise-server.onrender.com/api/todo/';
// const hostUrl = 'http://localhost:8080/api/todo/';
export const addTask = async (taskData) => {
	try {
		const response = await axios.post(`${hostUrl}add`, taskData);
		return response.data;
	} catch (error) {
		if (error.response && error.response.status === 409) {
			return error.response.data;
		} else {
			const errorMessage = 'Failed to add task';
			console.error(errorMessage, error.message);
			throw new Error(errorMessage);
		}
	}
};
