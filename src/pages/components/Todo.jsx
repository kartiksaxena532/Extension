
import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const [issues, setIssues] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addIssue = (e) => {
    e.preventDefault();
    if (title && description) {
      const newIssue = { title, description, id: Date.now() };
      setIssues([...issues, newIssue]);
      setTitle('');
      setDescription('');
    }
  };

  const deleteIssue = (id) => {
    setIssues(issues.filter((issue) => issue.id !== id));
  };


  return (
    <>
    <div className="flex full">
      <div className="bg-white border-2 border-gray-900 shadow-xl rounded-xl p-5 w-full max-w-md h-[300px] ">
        <h1 className="text-xl mb-4 font-sans font-bold">Daily Checklist ✅</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Task"
          className="border border-gray-300 rounded p-2 w-full mb-4"
        />
        <button
          onClick={handleAddTask}
          className="bg-[#1e1e1e] text-white px-4 py-2 rounded-md mb-4 w-full"
        >
          Add Task
        </button>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-2 border-b ${task.completed ? 'bg-green-100' : ''}`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTask(index)}
                  className="mr-2"
                />
                <span className={`flex-grow ${task.completed ? 'line-through' : ''}`}>{task.text}</span>
              </div>
              <button
                onClick={() => handleDeleteTask(index)}
                className="text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="p-4 w-full border-2 mt-1 border-gray-900 shadow-xl rounded-xl h-[300px] mb-9 overflow-y-hidden">
  <h1 className="text-xl mb-4 font-bold">Issue Tracker 💻</h1>
  <form onSubmit={addIssue} className="mb-4">
    <div className="mb-2">
      <label className="block text-sm font-medium mb-1">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
    </div>
    <div className="mb-2">
      <label className="block text-sm font-medium mb-1">Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
    </div>
    <button type="submit" className="bg-[#130d20] text-white px-4 py-2 rounded-md hover:bg-blue-600">
      Add Issue
    </button>
  </form>
  <ul className="overflow-y-auto h-[150px]">
    {issues.map((issue) => (
      <li key={issue.id} className="p-4 mb-2 border rounded">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{issue.title}</h2>
          <button
            onClick={() => deleteIssue(issue.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
        <p>{issue.description}</p>
      </li>
    ))}
  </ul>
</div>

   </>
  );
};

export default Todo;