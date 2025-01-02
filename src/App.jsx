import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { TaskProvider } from './Context/TaskContext';
import Home from './Pages/Home';
import AddTask from './Pages/AddTask';
import EditTask from './Pages/EditTask';
import './App.css'

const App = () => (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-task' element={<AddTask />} />
          <Route path='/edit-task/:id' element={<EditTask />} />
        </Routes>
      </Router>
    </TaskProvider>
);

export default App
