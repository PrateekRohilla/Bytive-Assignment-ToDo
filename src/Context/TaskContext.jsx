import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

//custom hook for context
export const useTaskContext = () => useContext(TaskContext);

//provider component
export const TaskProvider = ({children}) => { 

    const [tasks, setTasks] = useState([]);

    const addTask = (task) => setTasks((prev) => [...prev, task]);

    const updateTask = (updatedTask) => 
        setTasks((prev) => prev.map((t) => (t.id === updatedTask.id ? updatedTask: t)));

    return (
        <TaskContext.Provider value={{tasks, addTask, updateTask}}>
            {children}
        </TaskContext.Provider>
    );

};