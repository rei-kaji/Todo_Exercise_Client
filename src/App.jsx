import { useState, useEffect, useCallback } from 'react';
import { getAllTasks } from '../src/api';
import DeleteModal from './components/DeleteModal';
import AddTask from './components/AddTask';
import Search from './components/Search';
import Tasks from './components/Tasks';

function App() {
	const [tasks, setTasks] = useState([]);
	const [unCheckedTasks, setUnCheckedTasks] = useState([]);
	const [checkedTasks, setCheckedTasks] = useState([]);
	const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

	const handleDeleteAll = () => setIsConfirmationOpen(true);

	// Get all tasks from MongoDB and update the tasks
	const updateTasks = useCallback(async () => {
		try {
			const updatedTasks = await getAllTasks();
			// sort the tasks from A to Z by name
			updatedTasks.sort((a, b) => a.name.localeCompare(b.name));
			setTasks(updatedTasks);
		} catch (error) {
			console.error(error);
		}
	}, []);

	// Set unCheckedTasks and checkedTasks from tasks
	const divideTasks = useCallback(() => {
		try {
			const newTasks = [...tasks];
			setCheckedTasks(newTasks.filter((task) => task.checked).slice(0, 10));
			setUnCheckedTasks(newTasks.filter((task) => !task.checked));
		} catch (error) {
			console.error(error);
		}
	}, [tasks]);

	// Call updateTasks and divideTasks when the component is mounted
	useEffect(() => {
		updateTasks();
		divideTasks();
	}, []);

	// Call divideTasks when tasks is updated
	useEffect(() => {
		divideTasks();
	}, [tasks]);

	return (
		<div className="w-[80%] bg-gray-100 border-black border m-auto mt-5 mb-5 px-10 py-5 font-sans">
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
				<AddTask updateTasks={updateTasks} />
				<Search updateTasks={updateTasks} setTasks={setTasks} />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-16">
				<Tasks title="To do" tasks={unCheckedTasks} updateTasks={updateTasks} />
				<Tasks title="Done" tasks={checkedTasks} updateTasks={updateTasks} />
			</div>
			<DeleteModal
				isOpen={isConfirmationOpen}
				setIsConfirmationOpen={setIsConfirmationOpen}
				setTasks={setTasks}
			/>
		</div>
	);
}

export default App;
