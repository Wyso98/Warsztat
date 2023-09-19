import {API_KEY, API_URL} from "./constants";

export const getTasks = (settingFunctionCallback) => {
    fetch(`${API_URL}/tasks`, {
        headers: {
            Authorization: API_KEY
        }
    })
        .then(response => response.json())
        .then((data) =>{
            settingFunctionCallback(data.data)
        })
}

export const sendTask = (task, settingFunctionCallback)=>{
    fetch(`${API_URL}/tasks`, {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            Authorization: API_KEY,
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data =>{
            if(data.error === false){
                settingFunctionCallback(prevState => [...prevState, task])
            }
        })
}

export const deleteTask = (id, settingFunctionCallback) =>{
    fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: API_KEY,
        }
    })
        .then(response => response.json())
        .then(data => {
            if(data.error === false){
                settingFunctionCallback(id)
            }
        })
        .catch(error => console.log(error))
}