import { useState } from 'react';
import { addTask } from '../api';
import ErrorModal from './ErrorModal';

const AddTask = ({ updateTasks }) => {
	const [newTaskName, setNewTaskName] = useState('');
	const [isErrorOpen, setIsErrorOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const handleAddTask = async () => {
		const taskData = {
			name: newTaskName,
			checked: false,
		};
		try {
			// Call the API that create a task in MongoDB
			const response = await addTask(taskData);
			// If the task is created successfully, update the tasks
			if (response.status === 201) {
				updateTasks();
			}

			// If the task name is conflict with an existing task, show an error message
			if (response.status === 409) {
				setErrorMessage('This task name already exists');
				setErrorMessage(true);
			}
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
			<ErrorModal
				isOpen={isErrorOpen}
				handleClose={setIsErrorOpen}
				errorMessage={errorMessage}
			/>
		</>
	);
};

export default AddTask;
