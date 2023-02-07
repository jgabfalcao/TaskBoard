import React, {useState} from "react";
import Button from "../components/button";
import Form from "../components/form";
import List from "../components/list";
import StopWatch from "../components/stopwatch";
import { ITask } from "../types/task";
import style from './App.module.scss';


function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}/>
      <StopWatch />
    </div>
  );
}

export default App;
