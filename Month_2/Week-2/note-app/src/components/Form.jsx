import { useEffect, useRef, useState } from "react";
let count=0;
const Form =()=>{
    const [mainTopic ,setMainTopic]=useState("");
    const [subTopic,  setSubTopic]=useState("");
    const [content,  setContent]=useState("");
  

    
    return <main className="Main">
      <div className="notes-container">
          <h1>Taking Note</h1>
          <form action="#"  
          className="note-form">
            <input  type="text" value={mainTopic}
            placeholder="Main Topic"  
            className="main-topic" 
             onChange={(event)=>setMainTopic(event.target.value)}/>
            <input  type="text" value={subTopic}
             placeholder="Sub Topic"
           className="sub"
             onChange={(event)=>setSubTopic(event.target.value)}/>
            <textarea  value={content} onChange={(event)=>setContent(event.target.value)}/>
            <button onClick className="save-btn">Save</button>
          </form>
          </div>
    </main>
};

export default Form;