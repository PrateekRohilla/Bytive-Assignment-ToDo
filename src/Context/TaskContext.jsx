import { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

//custom hook for context
export const useTaskContext = () => useContext(TaskContext);

//provider component
export const TaskProvider = ({children}) => { 

    const [tasks, setTasks] = useState([]);

    const addTask = (task) => setTasks((prev) => [...prev, task]);

    const updateTask = (updatedTask) => 
        setTasks((prev) => prev.map((t) => (t.id === updatedTask.id ? updatedTask: t)));

    //fetch initial tasks from API
    useEffect(() => {
      const fetchTasks = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();

        const initialTasks = data.slice(0,4).map((todo) => ({
            id: todo.id,
            title: todo.title,
            description: "Happy New Year 🫠",
            status: todo.completed ? "Completed" : "Pending",
        }));

        setTasks(initialTasks);
      }; 

      fetchTasks();
    },[]);

    return (
        <TaskContext.Provider value={{tasks, addTask, updateTask}}>
            {children}
        </TaskContext.Provider>
    );

};