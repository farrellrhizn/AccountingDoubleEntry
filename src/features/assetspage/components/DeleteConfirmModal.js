import React from 'react'; 

const DeleteConfirmModal = ({ onConfirm, onCancel }) => {
    return (
        <div className="modal modal-open"> {/* Updated modal wrapper here */}
            <div className="modal-box relative bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3 text-center">
                <div className="flex justify-center mb-4">
                    <div className="bg-red-100 text-red-600 p-2 rounded-full">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                </div>
                <h2 className="text-xl font-bold mb-2">Are you sure?</h2>
                <p className="text-sm text-gray-600 mb-4">
                    This action cannot be undone. Do you want to continue?
                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={onCancel}
                        className="btn bg-gray-300 text-gray-700 hover:bg-gray-400 px-4 py-2 rounded"
                    >
                        No
                    </button>
                    <button
                        onClick={onConfirm}
                        className="btn bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded"
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;
