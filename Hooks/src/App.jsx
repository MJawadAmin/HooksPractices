import { useState } from 'react'
import './App.css'
// import PasswordGenerator from './Components/PasswordGenerator';
import Hooks from './Components/Hooks';


function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Jawad Amin");
   const AddValue=()=>(
    count<10?
    setCount(count+1): alert("You cannot got more than 10 welle bete ho jaa koe aor kaam kar"),
    setName(name+1)
   );
   const RemoveValue=()=>(

  count>=1?
    setCount(count-1): alert(" Your value are already 0 baqi kiy krna hai andar gusna hai? ")
  
   )

 

  
  return (
    <>
    <div className='flex flex-col justify-between items-center'>
    <h1 className= {`h-16 w-16 rounded-full items-center justify-center" ${ count < 7 ? "text-white bg-black": "text-red-800"} `}> {count}</h1>
    <br/>
    <button onClick={AddValue} className='bg-slate-900 text-white w-44 h-10 rounded-md'>Add</button>
    <br/>
    <br/>
    <button onClick={RemoveValue} className='bg-slate-900 text-red-800 w-44 h-10 rounded-md'> Remove   
      {}</button>
      {/* <PasswordGenerator/> */}
      </div>
      <Hooks/>
      
   </>
  )
};

export default App
