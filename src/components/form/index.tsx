import { time } from "console";
import React, { useState }  from "react";
import Button from "../button";
import style from './Form.module.scss'

class Form extends  React.Component{
  state = {
    task: "",
    time: "00:00"
  }

  insertTask (event: React.FormEvent<HTMLFormElement>){
    event.preventDefault(); 
    console.log('state: ', this.state);
  }

  render(){
    return(
      <form className={style.newTask} onSubmit={this.insertTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">
            Adicione um novo estudo 
          </label>
          <input 
          type="text"
          name="task"
          id="task"
          value={this.state.task}
          onChange={event => this.setState({...this.state, task: event.target.value})}
          placeholder="O que voce quer estudar" required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">
            Tempo
          </label>
          <input 
          type="time"
          step="1"
          name="time"
          value={this.state.time}
          onChange={event => this.setState({...this.state, time: event.target.value})}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
          />
        </div>
        <Button 
        btnText="Adicionar"/> 
        
      </form>
    )
  }

}


export default Form;