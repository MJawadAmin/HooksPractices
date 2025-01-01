import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
   const AddValue=()=>(
    setCount(count+1)
   );
   const RemoveValue=()=>(
    setCount(count-1)
   )

 

  
  return (
    <>
    <h1>{count}</h1>
    <button onClick={AddValue} className='bg-slate-900 text-white w-44 h-10 rounded-md'>Add</button>
    <br/>
    <br/>
    <button onClick={RemoveValue} className='bg-slate-900 text-red-800 w-44 h-10 rounded-md'> Remove   
      {}</button>
   </>
  )
};

export default App
