import React, { useState } from 'react';

export default function MyCustomWidget() {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');
  const [period, setPeriod] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim() !== '' && time.trim() !== '' && period.trim() !== '') {
      setTaskList([...taskList, { task, time, period }]);
      setTask('');
      setTime('');
      setPeriod('');
    }
  };

  const deleteTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  return (
    <div>
      <h1>To-do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <input
        type="text"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Enter time"
      />
      <select value={period} onChange={(e) => setPeriod(e.target.value)}>
        <option value="">Select Period</option>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {taskList.map((taskItem, index) => (
          <li key={index} style={{ margin: '0 1em' }}>
            <span>{taskItem.task}</span> (Time: {taskItem.time} {taskItem.period})
            <button onClick={() => deleteTask(index)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
