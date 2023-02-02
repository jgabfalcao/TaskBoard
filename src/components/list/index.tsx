import React from 'react';
import style from './List.module.scss'

function List(){
  const tasks = [{
    tarefa: 'React',
    tempo: '02:00:00'
  }, {
    tarefa: 'TypeScript',
    tempo: '01:00:00'
  }, {
    tarefa: 'JavaScript',
    tempo: '03:00:00  '
  }
  ]

  return(
    <aside className={style.listTasks}>
        <h2>Estudos do dia</h2>
        <ul>
          {tasks.map((item, index) => (
            <li key={index} className={style.item}>
              <h3>
               {item.tarefa}
              </h3>
                <span>
                {item.tempo }
                </span>
              
            </li>
          ))}
        </ul>
    </aside>
  )
}

export default List;