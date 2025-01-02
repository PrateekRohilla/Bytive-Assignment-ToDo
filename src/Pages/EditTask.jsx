import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTaskContext } from "../Context/TaskContext";

const EditTask = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { tasks, updateTask } = useTaskContext();
    const [task, setTask] = useState(null);

    useEffect(() => {
        const foundTask = tasks.find((t) => t.id === parseInt(id));
        if (foundTask)
            setTask(foundTask);
    }, [id, tasks])

    const handleUpdateTask = () => {
        updateTask(task);

        //navigate to home after update
        navigate("/");
    };

    //handle null task
    if (!task)
        return <div>Loading...</div>

    //title & desc as read only
    //only status can be edited
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Edit Task</h1>
            <div className="bg-white p-6 rounded-md shadow-md max-w-lg mx-auto">
                <p className="text-lg font-semibold mb-4">Title: {task.title}</p>
                <p className="text-gray-600 mb-6">Description: {task.description}</p>
                <label className="block text-gray-700 mb-2">Status:</label>
                <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6" value={task.status} onChange={(e) => setTask({ ...task, status: e.target.value })}>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
                <button onClick={handleUpdateTask} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 w-full">Save</button>
            </div>
        </div>
    )

}

export default EditTask;