import axios from 'axios';

// When running locally, use the following line
// const hostUrl = 'http://localhost:8080/api/todo/';

// When running on Render, use the following line
const hostUrl = 'https://todo-exercise-server.onrender.com/api/todo/';

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

export const deleteAllTasks = async () => {
	try {
		const response = await axios.post(`${hostUrl}deleteAll`);
		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

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

export const getAllTasks = async () => {
	try {
		const response = await axios.get(`${hostUrl}tasks`);
		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

export const updateTask = async (id, checked) => {
	try {
		const response = await axios.post(`${hostUrl}update`, {
			id,
			checked,
		});
		return response.data;
	} catch (error) {
		return error.message;
	}
};
