import React from "react";
import {createRoot} from "react-dom/client";
import {useState, useEffect} from "react";
import {NewTask} from "./NewTask";
import {getTasks, sendTask} from "./api/tasks";
import {Task} from "./Task";
const App = ()=>{
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [listOfTasks, setListOfTasks] = useState(false)

    const newTaskData = {
        description: taskDescription,
        status: "open",
        title: taskTitle,
    }
    const addNewTask = (event) =>{
        event.preventDefault();
        sendTask(newTaskData, setListOfTasks);
        setTaskTitle("");
        setTaskDescription("")
    }
    const removeAddedTask = (id)=>{
        console.log(id)
        setListOfTasks(prevState => {
           return prevState.filter(item=>{
                return item.id !== id
            })
        })
    }
    useEffect(() => {
        getTasks(setListOfTasks)
    }, []);
    const changeTitle = (event) =>{
        setTaskTitle(event.target.value)
    }
    const changeDescription = (event)=>{
        setTaskDescription(event.target.value)
    }
    const showListOfTasks = () =>{
        if(listOfTasks === false){
            return <p>Ładuję dane...</p>
        }else{
            return listOfTasks.map(item =>{
                return <Task removeTask={removeAddedTask} key={item.id} item={item}/>
            })
        }
    }

    return(
        <>
            <NewTask inputTitle={taskTitle} changeTitleFunction={changeTitle} inputDescription={taskDescription} changeDescriptionFunction={changeDescription} sendTaskFunction={addNewTask}/>
            <ul>
                {showListOfTasks()}
            </ul>
        </>
    )
}

const container = document.querySelector("#app");
const root = createRoot(container);
root.render(<App/>)