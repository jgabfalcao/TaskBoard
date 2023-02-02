import React from "react";
import Button from "../components/button";
import Form from "../components/form";
import List from "../components/list";
import style from './App.module.scss';


function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;