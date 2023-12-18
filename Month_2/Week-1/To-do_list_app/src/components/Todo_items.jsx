import cross from './assets/cross.png';
import not_tick from './assets/not_tick.png';
import tick from './assets/tick.png';
import  './CSS/Todo_items.css'
import Todo from './Todo';

const Todo_items = ({no,text,display,Settodo}) => {
  //logic to replace the non tick icon with tick icon
  const toggle=(no)=>{
    let data = JSON.parse(localStorage.getItem("todo"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } 
        else {
          data[i].display = "";
        }
        break;
      }
    }
    Settodo(data);
  }
  //logic for delet icon
  const deletetodo =(no)=>{
    let data = JSON.parse(localStorage.getItem("todo"));
      data= data.filter((todo)=>todo.no!==no)
      Settodo(data);
  }
  return (
        <div className="todo-items"> 
    <div className={`todo-items-container ${display}`} onClick={()=>{toggle(no)}}>
     {display=== "" ? <img src={not_tick} alt="" />: <img src={tick} alt="" />
     } 
      <div className="todo-item-text">{text}</div>
    </div>
     <img className="todo-items-crossicon" onClick={()=>{deletetodo(no)}} src={cross} alt="" />
    </div>
  )
}

export default Todo_items