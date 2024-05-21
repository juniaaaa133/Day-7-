import { useEffect, useState } from "react";
import './index.css'
import './style.css'

function App() {

let [data,setData] = useState([]);

let fetchData = async () => {
try {
  let res = await fetch('https://jsonplaceholder.typicode.com/todos')
let data = await res.json();
setData(data);
} catch (error) {
  console.log(error);
}
}

useEffect(()=>{
  fetchData();
},[])

  return (
  <>
  <div className="title main-f" style={{
    textAlign : "center"
  }}>ToDos</div>
  <div className="list-ctn">
  {
    data.map((list,index) => (
      <div key={index} className="lisT">
        {
          list.completed ? 
          <p className="active main-f">Completed</p>
          :
          <p className="ongoin main-f">Ongoing</p>
        }
      <h4 className="list-title main-f">{list.title}</h4>
    </div>
    ))
  }
  </div>
  </>
  )
}

export default App
