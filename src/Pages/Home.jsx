import { Link } from "react-router-dom";
import { useTaskContext } from "../Context/TaskContext";

const Home = () => {

    //using our custom hook to access tasks
    const {tasks} = useTaskContext();

    return (
        <div>
            <h1>ToDo List</h1>
            <Link to='/add-task'>Add Task</Link>
            <ul>
                {
                    tasks.map((task) => (
                        <li key={task.id}>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <p>Status: {task.status}</p>
                            <Link to={`/edit-task/${task.id}`}>Edit</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )


}

export default Home;