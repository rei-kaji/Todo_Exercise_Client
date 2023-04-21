import React from 'react';
import { updateTask, deleteTask } from '../api';
import { TrashIcon } from '@heroicons/react/24/outline';

const Task = ({ id, name, checkedFlg, updateTasks }) => {
	const handleCheckTask = async (event) => {
		try {
			const checked = event.target.checked;

			// Call the API that update the checked status of a task in MongoDB
			await updateTask(id, checked);

			updateTasks();
		} catch (error) {
			console.error(error);
		}
	};

	const handleDeleteTask = async () => {
		try {
			// Call the API that delete a task in MongoDB
			await deleteTask(id);
			// alert(id);

			updateTasks();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div className="flex justify-between mt-5">
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						className="form-checkbox h-6 w-6 cursor-pointer"
						checked={checkedFlg}
						onChange={handleCheckTask}
					/>
					<span className="ml-3 text-xl">
						{name.length > 25 ? name.slice(0, 25) + '...' : name}
					</span>
				</label>
				<button className="h-6 w-6" onClick={handleDeleteTask}>
					<TrashIcon />
				</button>
			</div>
		</>
	);
};

export default Task;
