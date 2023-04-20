// Call: POST /api/todo/update
import axios from 'axios';
const hostUrl = 'https://todo-exercise-server.onrender.com/api/todo/';
// const hostUrl = 'http://localhost:8080/api/todo/';
export const updateTask = async (id, checked) => {
	try {
		const response = await axios.post(`${hostUrl}update`, {
			id,
			checked,
		});

		// alert('success');
		return response.data;
	} catch (error) {
		// alert(error.message);
		return error.message;
	}
};
