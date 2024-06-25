import React, { useState, useEffect} from "react";
import List from "./List.jsx"
import AddTask from "./AddTask.jsx"

const  HomePage=()=> {
  
  const [list, setList] = useState(["Example task", "You can add and delete tasks"]);

  useEffect(() => {
  }, [list]);

  return (
  <div className="alignCenter">
    <h1 className="roboto-black-italic labelText">TO-DO-LIST!</h1>
    <AddTask tasks={list} setList={setList}></AddTask>
    <List tasks={list} setList={setList}></List>
    </div>
  );
}

export default HomePage;