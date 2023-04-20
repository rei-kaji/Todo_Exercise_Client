// Call: POST /api/todo/add
import axios from 'axios';
const hostUrl = 'https://todo-exercise-server.onrender.com/api/todo/';
// const hostUrl = 'http://localhost:8080/api/todo/';
export const addTask = async (taskData) => {
	try {
		const response = await axios.post(`${hostUrl}add`, taskData);
		return response.data;
	} catch (error) {
		console.error('Failed to add task:', error.message);
		throw error;
	}
};
