import { useState, useEffect } from 'react';
import Task from './components/Task';
import DeleteAllConfirmation from './components/DeleteAllConfirmation';

function App() {
	const [tasks, setTasks] = useState([]);
	const [unCheckedTasks, setUnCheckedTasks] = useState([]);
	const [checkedTasks, setCheckedTasks] = useState([]);

	const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

	const handleDeleteAll = () => {
		setIsConfirmationOpen(true);
	};

	const handleDeleteAllCancel = () => {
		setIsConfirmationOpen(false);
	};

	const handleDeleteAllConfirm = () => {
		setIsConfirmationOpen(false);
	};

	useEffect(() => {
		// Call the API that get all tasks from MongoDB

		// Reorder tasks by alphabetical order
		setTasks([...tasks].sort((a, b) => a.name.localeCompare(b.name)));

		// Set unCheckedTasks and checkedTasks from tasks
		setCheckedTasks(tasks.filter((task) => task.checked).slice(0, 10));
		setUnCheckedTasks(tasks.filter((task) => !task.checked));
	}, []);

	return (
		<div className="w-[80%] bg-gray-100 border-black border m-auto mt-5 px-10 py-5 font-sans">
			<div className="flex justify-between flex-col sm:flex-row">
				<h1 className="font-bold text-2xl text-center">Marvelous v2.0</h1>
				<button
					className="text-sm text-blue-600 decoration-blue-600 underline mt-3 sm:mt-0"
					onClick={handleDeleteAll}
				>
					Delete all tasks
				</button>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 mt-10 sm:gap-16">
				<div className="flex gap-1 mx-auto my-0 w-full">
					<input
						type="text"
						className="w-full border border-black rounded-md p-2 mt-5"
						placeholder="Add task.."
					/>
					<button className="bg-blue-600 text-white rounded-md p-2 mt-5">
						Add
					</button>
				</div>
				<div className="sm:justify-self-end">
					<input
						type="text"
						className="sm:col-end-4 border border-black rounded-md p-2 mt-5 w-full"
						placeholder="Search.."
					/>
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-16">
				<div>
					<h2 className="text-2xl pl-3 pb-2">To do</h2>
					<hr className="border-black border-[1px]" />
					<div className="flex flex-col">
						<label className="inline-flex items-center mt-5">
							<input type="checkbox" className="form-checkbox h-6 w-6" />
							<span className="ml-3 text-xl">Task 1</span>
						</label>
					</div>
				</div>
				<div className="">
					<h2 className="text-2xl pl-3 pb-2">Done</h2>
					<hr className="border-black border-[1px]" />
					<div className="flex flex-col">
						{/* <Task key={id} id={id} name={name} checked={checked} /> */}
					</div>
				</div>
			</div>
			<DeleteAllConfirmation
				isOpen={isConfirmationOpen}
				onClose={handleDeleteAllCancel}
				onConfirm={handleDeleteAllConfirm}
			/>
		</div>
	);
}

export default App;
