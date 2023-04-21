import axios from 'axios';

// const hostUrl = 'https://todo-exercise-server.onrender.com/api/todo/';
const hostUrl = 'http://localhost:8080/api/todo/';

// Call: Post /api/todo/delete
// Delete task from api
export const deleteTask = async (id) => {
	try {
		const response = await axios.post(`${hostUrl}delete`, {
			id,
		});
		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};
