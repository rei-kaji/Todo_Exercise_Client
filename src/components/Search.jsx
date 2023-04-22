import { useState, useEffect } from 'react';
import { getAllTasks } from '../api';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Search = ({ updateTasks, setTasks }) => {
	const [search, setSearch] = useState('');
	useEffect(() => {
		if (!search) {
			// If the search input is empty, display all tasks
			updateTasks();
			return;
		}
		const searchTasks = async () => {
			// Get all tasks from MongoDB
			let reGetTasks = await getAllTasks();

			// sort the tasks by name
			reGetTasks.sort((a, b) => a.name.localeCompare(b.name));

			// Filter the tasks by the search input
			const newTasks = reGetTasks.filter((task) =>
				task.name.toLowerCase().includes(search.toLowerCase())
			);
			setTasks(newTasks);
		};
		searchTasks();
	}, [search]);

	const handleClearSearch = () => {
		setSearch('');
		updateTasks();
	};
	return (
		<div className="sm:justify-self-end relative">
			<div className="flex items-center">
				<input
					type="text"
					className="sm:col-end-4 border border-black rounded-md p-2 mt-5 w-full"
					placeholder="Search.."
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>
				{search && (
					<div className="absolute right-2">
						<XMarkIcon
							className="w-5 h-5 mt-5 text-gray-500 cursor-pointer"
							onClick={handleClearSearch}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Search;
