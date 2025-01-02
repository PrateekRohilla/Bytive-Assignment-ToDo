import { Link } from "react-router-dom";
import { useTaskContext } from "../Context/TaskContext";

const Home = () => {

    //using our custom hook to access tasks
    const { tasks } = useTaskContext();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">ToDo List</h1>

            {/* add task btn */}
            <div className="text-center mb-4">
                <Link to='/add-task' className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
                    Add Task
                </Link>
            </div>

            {/* task list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {
                    tasks.map((task) => (
                        <li key={task.id} className="list-none bg-white p-4 rounded-md shadow-md border border-gray-200">
                            <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
                            <p className="text-gray-600 mb-4">{task.description}</p>
                            {/* green - Completed | yellow - pending */}
                            <p className={`mb-4 font-medium ${task.status === "Completed"
                                    ? "text-green-600"
                                    : "text-yellow-600"
                                }`}>Status: {task.status}</p>
                            <Link to={`/edit-task/${task.id}`} className="text-blue-500 hover:text-blue-700">Edit</Link>
                        </li>
                    ))
                }

            </div>
        </div>
    )


}

export default Home;