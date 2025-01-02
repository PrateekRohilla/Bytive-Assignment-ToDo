import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../Context/TaskContext";

const AddTask = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Pending");

    const {addTask} = useTaskContext();
    const navigate = useNavigate();
    
    const handleAddTask = () => {
        const newTask = {id:Date.now(), title, description, status};
        addTask(newTask);

        //redirecting to home(tasks list) after adding task
        navigate("/");
    }

    return(
        <div>
            <h1>Add Task</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
                <button onClick={handleAddTask}>Add Task</button>
            </form>
        </div>
    );

};

export default AddTask;