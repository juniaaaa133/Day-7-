import { useEffect } from "react";

function App() {

let fetchData = async () => {
try {
  let res = await fetch('https://jsonplaceholder.typicode.com/todos')
let data = await res.json();
console.log(data);
} catch (error) {
  console.log(error);
}
}

useEffect(()=>{
  fetchData();
},[])

  return (
   <div>Hey There!</div>
  )
}

export default App
