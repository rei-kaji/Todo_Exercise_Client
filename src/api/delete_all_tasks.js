import axios from 'axios';

const hostUrl = 'https://todo-exercise-server.onrender.com/api/todo/';

// Call: DELETE /api/todo/deleteAll
// Delete all tasks from api
export const deleteAllTasks = async () => {
	try {
		const response = await axios.post(`${hostUrl}deleteAll`);
		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};
