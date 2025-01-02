import {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTaskContext } from "../Context/TaskContext";

const EditTask = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const {tasks, updateTask} = useTaskContext();
    const [task, setTask] = useState(null);

    useEffect(() => {
        const foundTask = tasks.find((t) => t.id === parseInt(id));
        if(foundTask)
            setTask(foundTask);
    }, [id, tasks])

    const handleUpdateTask = () => {
        updateTask(task);

        //navigate to home after update
        navigate("/");
    };

    //handle null task
    if(!task)
        return <div>Loading...</div>
    
    //title & desc as read only
    //only status can be edited
    return (
        <div>
            <h1>Edit Task</h1>
            <p>Title: {task.title}</p>
            <p>Description: {task.description}</p>
            <select value={task.status} onChange={(e) => setTask({...task, status:e.target.value})}>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>
            <button onClick={handleUpdateTask}>Save</button>
        </div>
    )

}

export default EditTask;