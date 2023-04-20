import { useState, useEffect } from 'react';
import { getAllTasks } from '../api';

const Search = ({ updateTasks, setTasks }) => {
	const [search, setSearch] = useState('');
	useEffect(() => {
		if (!search) {
			// If the search input is empty, display all tasks
			updateTasks();
			return;
		}
		const searchTasks = async () => {
			let reGetTasks = await getAllTasks();

			// sort the tasks by name
			reGetTasks.sort((a, b) => a.name.localeCompare(b.name));

			const newTasks = reGetTasks.filter((task) =>
				task.name.toLowerCase().includes(search.toLowerCase())
			);
			setTasks(newTasks);
		};
		searchTasks();
	}, [search]);
	return (
		<div className="sm:justify-self-end">
			<input
				type="text"
				className="sm:col-end-4 border border-black rounded-md p-2 mt-5 w-full"
				placeholder="Search.."
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
};

export default Search;
