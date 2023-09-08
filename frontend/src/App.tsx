import React, { useEffect, useState } from 'react';
import List from './components/List';
import axios from 'axios';
import { baseURL } from './utils/constant';

interface Task {
  _id: string;
  task: string;
}

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [updateUI, setUpdateUI] = useState<boolean>(false);
  const [updateId, setUpdateId] = useState<string | null>(null);

  useEffect(() => {
    axios.get<Task[]>(`${baseURL}/tasks`).then((res) => {
      console.log(res.data);
      setTasks(res.data);
    });
  }, [updateUI]);

  const addTask = () => {
    axios.post(`${baseURL}/tasks`, { task: input }).then((res) => {
      console.log(res.data);
      setInput('');
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateMode = (id: string, text: string) => {
    console.log(text);
    setInput(text);
    setUpdateId(id);
  };

  const updateTask = () => {
    if (updateId) {
      axios.put(`${baseURL}/tasks/${updateId}`, { task: input }).then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setUpdateId(null);
        setInput('');
      });
    }
  };

  return (
    <main>
      <div className="input_holder mt-4">
        <input
          type="text"
          className="border-black rounded-sm border-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit" className="bg-slate-400" onClick={updateId ? updateTask : addTask}>
          {updateId ? 'Update Task' : 'Add Task'}
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <List key={task._id} id={task._id} task={task.task} setUpdateUI={setUpdateUI} updateMode={updateMode} />
        ))}
      </ul>
    </main>
  );
};

export default App;
