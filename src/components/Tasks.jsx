import React from 'react';
import Task from './Task';

const Tasks = ({ title, tasks, updateTasks }) => {
	return (
		<div>
			<h2 className="text-2xl pl-3 pb-2">{title}</h2>
			<hr className="border-black border-[1px]" />
			<div className="flex flex-col">
				{tasks.map(({ _id, name, checked }) => (
					<Task
						key={_id}
						id={_id}
						name={name}
						checkedFlg={checked}
						updateTasks={updateTasks}
					/>
				))}
			</div>
		</div>
	);
};

export default Tasks;
