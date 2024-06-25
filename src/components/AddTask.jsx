import React, {useState} from "react";

const AddTask = props => {

    const [inputValue, setInputValue]= useState('')

    const inputChangeHandler = (e) => {
        setInputValue(e.target.value)
     };
    
    const saveTask=()=>{
        let newList= [...props.tasks]
        const inputValue=document.getElementById('newTask').value
        newList.push(inputValue)
        setInputValue('')
        props.setList(newList)
    }

    return (
    <div className="formTask">
      <label className="labelText">Type your new task here!</label>
      <input className="taskInput" id='newTask' type="text" onChange={inputChangeHandler} value={inputValue} />
      <button className='saveButton' onClick={()=>saveTask()}>Add task to list</button>
    </div>)

}

export default AddTask;