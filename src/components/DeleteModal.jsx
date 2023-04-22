import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { deleteAllTasks } from '../api';

const DeleteModal = ({ isOpen, setIsConfirmationOpen, setTasks }) => {
	const handleDeleteAllCancel = () => {
		setIsConfirmationOpen(false);
	};

	const handleDeleteAllConfirm = () => {
		// Call the API that delete all tasks from MongoDB and Update the task list
		deleteAllTasks();
		setTasks([]);
		setIsConfirmationOpen(false);
	};
	return (
		<Transition show={isOpen}>
			<Dialog
				as="div"
				className="fixed inset-0 z-10 overflow-y-auto"
				onClose={handleDeleteAllCancel}
			>
				<div className="min-h-screen px-4 text-center">
					<Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

					<span
						className="inline-block h-screen align-middle"
						aria-hidden="true"
					>
						&#8203;
					</span>

					<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
						<Dialog.Title
							as="h3"
							className="text-lg font-medium leading-6 text-gray-900 mb-4"
						>
							Delete All Tasks
						</Dialog.Title>

						<div className="mt-2 mb-6 text-gray-500">
							<p>Are you sure you want to delete all tasks?</p>
						</div>

						<div className="mt-4 flex justify-end">
							<button
								type="button"
								className="inline-flex justify-center px-4 py-2 text-sm font-medium bg-blue-600 text-white border border-transparent rounded-md hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 mr-4"
								onClick={handleDeleteAllCancel}
							>
								Cancel
							</button>
							<button
								type="button"
								className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
								onClick={handleDeleteAllConfirm}
							>
								Delete All
							</button>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default DeleteModal;
