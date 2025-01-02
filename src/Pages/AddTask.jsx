import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../Context/TaskContext";

const AddTask = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Pending");

    const { addTask } = useTaskContext();
    const navigate = useNavigate();

    const handleAddTask = () => {
        const newTask = { id: Date.now(), title, description, status };
        addTask(newTask);

        //redirecting to home(tasks list) after adding task
        navigate("/");
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Add Task</h1>

            <div className="bg-white p-6 rounded-md shadow-md max-w-lg mx-auto">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2">Title</label>
                        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Description</label>
                        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Status</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                    </div>
                    <button onClick={handleAddTask} className="bg-neutral-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-neutral-600 w-full">Add Task</button>
                </form>
            </div>
        </div>
    );

};

export default AddTask;