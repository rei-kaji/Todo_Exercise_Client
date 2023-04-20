import React from 'react';
import { Dialog, Transition } from '@headlessui/react';

const ErrorModal = ({ isOpen, handleClose, errorMessage }) => {
	return (
		<Transition show={isOpen}>
			<Dialog
				as="div"
				className="fixed inset-0 z-10 overflow-y-auto"
				onClose={handleClose}
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
							Error Messages
						</Dialog.Title>

						<div className="mt-2 mb-6 text-gray-500">
							<p>{errorMessage}</p>
						</div>

						<div className="mt-4 flex justify-end">
							<button
								type="button"
								className="inline-flex justify-center px-4 py-2 text-sm font-medium bg-blue-600 text-white border border-transparent rounded-md hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 mr-4"
								onClick={handleClose}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default ErrorModal;
