import React from 'react';
import { updateTask } from '../api';

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

	return (
		<>
			<label className="inline-flex items-center mt-5">
				<input
					type="checkbox"
					className="form-checkbox h-6 w-6 cursor-pointer"
					checked={checkedFlg}
					onChange={handleCheckTask}
				/>
				<span className="ml-3 text-xl">{name}</span>
			</label>
		</>
	);
};

export default Task;
