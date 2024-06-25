import React from "react";
import { CiTrash } from "react-icons/ci";

const List = props => {

    const deleteTask =(id)=>{
        let newList= [...props.tasks]
        newList.splice(id, 1)
        props.setList(newList)
    }

    return (
    <div className="listContainer">
        {
        props.tasks.map((task,id)=>{
            return (
                    <div className="row" id={id}>
                    <input className="columnCompleteIcon" type="checkbox" id={id} ></input>
                    <div className="columnTask">{task}</div>
                    <div className="columnDeleteIcon" >
                        <CiTrash onClick={() => deleteTask(id)}></CiTrash>
                    </div>
                    </div>
                    )
                })
        }
        </div>
        )
}

export default List;