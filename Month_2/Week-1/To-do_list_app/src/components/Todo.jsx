import { useEffect, useRef, useState } from "react"
import "./CSS/Todo.css";
import Todo_items from "./Todo_items";
let count = 0;
const Todo = () => {
  const inputref = useRef(null);
  const [todo, Settodo] = useState([]);
  const Add = () => {
    Settodo([
      ...todo,
      { no: count++, text: inputref.current.value, display: "" },
    ]);
    inputref.current.value = "";
    localStorage.setItem("todo_count", count);
  };
  useEffect(() => {
    Settodo(
      //to get todos form from localstorage
      JSON.parse(localStorage.getItem("todo"))
    );
    //to make the id unique
    count = localStorage.getItem("todo_count");
  }, []);
  useEffect(() => {
    setTimeout(() => {
      // to store todos for latter use ... wont delete on reresh
      localStorage.setItem("todo", JSON.stringify(todo));
      console.log(todo);
    }, 100);
  }, [todo]);
  return (
    <div className="todo">
      <div className="todoheader">To-Do List</div>
      <div className="todoadd">
        <input
          ref={inputref}
          type="text"
          className="todoinput"
          placeholder="Add Your Task"
        />
        <div
          onClick={() => {
            Add();
          }}
          className="todo-add-btn"
        >
          Add
        </div>
      </div>
      <div className="todo_list">
        {todo.map((item, index) => {
          return (
            //using props to send the input date to Todo_items
            <Todo_items
              key={index}
              no={item.no}
              text={item.text}
              display={item.display}
              Settodo={Settodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;