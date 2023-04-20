import axios from 'axios';

const hostUrl = 'https://todo-exercise-server.onrender.com/api/todo/';

// Call: GET /api/todo/tasks
// Get all tasks from api
export const getAllTasks = async () => {
	try {
		const response = await axios.get(`${hostUrl}tasks`);
		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};
