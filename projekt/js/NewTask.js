import React from "react";

export const NewTask = ({inputTitle, changeTitleFunction, inputDescription, changeDescriptionFunction, sendTaskFunction})=>{
    return(
        <form onSubmit={event => sendTaskFunction(event)}>
            <h1>New Task Creator</h1>
            <input type={"text"} placeholder={"Title"} value={inputTitle} onChange={(event)=>changeTitleFunction(event)}/><br/>
            <input type={"text"} placeholder={"Description"} value={inputDescription} onChange={(event => changeDescriptionFunction(event))}/><br/>
            <input type={"submit"} value={"SEND TASK"}/>
        </form>
    )
}