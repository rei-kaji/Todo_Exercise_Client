import { useState } from 'react';
import { addTask } from '../api';

const AddTask = ({ updateTasks }) => {
	const [newTaskName, setNewTaskName] = useState('');
	const handleAddTask = async () => {
		const taskData = {
			name: newTaskName,
			checked: false,
		};
		try {
			// Call the API that create a task in MongoDB
			await addTask(taskData);
			updateTasks();
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<form className="flex gap-1 mx-auto my-0 w-full" onSubmit={handleAddTask}>
			<input
				type="text"
				className="w-full border border-black rounded-md p-2 mt-5"
				placeholder="Add task.."
				onChange={(e) => setNewTaskName(e.target.value)}
				required
			/>
			<input
				type="submit"
				className="bg-blue-600 text-white rounded-md p-2 mt-5"
				value="Add"
			/>
		</form>
	);
};

export default AddTask;
