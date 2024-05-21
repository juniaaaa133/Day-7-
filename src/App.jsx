import { useEffect, useReducer, useRef, useState } from "react";
import './index.css'
import './style.css'

function App() {

let [data,setData] = useState([]);
let [hasError,setHasError] = useState(false);
let searchInputRef = useRef();

let fetchData = async () => {
try {
  let res = await fetch('https://jsonplaceholder.typicode.com/todos')
let data = await res.json();
setData(data);
} 
catch (error) {
  console.log(error);
}
}

let filterData = async (e) => {
  e.preventDefault();
  let id = searchInputRef.current.value;
if(id < 1 || id > data.length){
   setHasError(true)
   searchInputRef.current.value = '';
   return;
};
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    let data_detail = await res.json();
    setData([data_detail])
    setHasError(false);
    searchInputRef.current.value = '';
  }catch(err){
    console.log(err)
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
  <form className="search-inp-ctn"> 
  <input ref={searchInputRef} type="number" placeholder="Search id" className="bg-main search main-f" /> 
  <button onClick={filterData} className="main-f btn">Search</button>
  </form>

{
  hasError ? 
  <h3 className="error main-f">Oops! Id should be valid number.(Eg - 1,2,3)</h3>
:
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
}
  </>
  )
}

export default App
