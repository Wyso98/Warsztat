import React from "react";
import {deleteTask} from "./api/tasks";

export const Task = ({item, removeTask})=>{
    return(
        <li id={item.id}>
            <span style={{fontWeight: "bold"}}>{item.title}</span><br/>
            {item.description}
            <button onClick={()=> deleteTask(item.id, removeTask)}>X - usunięcie lokalne i w API</button>
            <button onClick={()=>removeTask(item.id)}>test - usunięcie lokalne</button>
        </li>
    )
}