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
			// Call the API that add a task in MongoDB and update the tasks
			await addTask(taskData);
			updateTasks();
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<form className="flex gap-1 mx-auto my-0 w-full" onSubmit={handleAddTask}>
				<input
					type="text"
					className="w-full border border-black rounded-md p-2 mt-5"
					placeholder="Input your task.."
					onChange={(e) => setNewTaskName(e.target.value)}
					required
				/>
				<input
					type="submit"
					className="bg-sky-400 border border-black bg-opacity-50 text-black rounded-md p-2 mt-5"
					value="Add"
				/>
			</form>
		</>
	);
};

export default AddTask;
