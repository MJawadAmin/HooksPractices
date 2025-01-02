import {useCallback, useEffect, useState} from 'react'

const Hooks = () => {
    const [length , setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState(""); 
    const PasswordGenarator= useEffect(()=>{
        const pass= ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Use 'let' instead of 'const'
        
        if (numberAllowed) str += "0123456789"; // Now this works fine
        if (charAllowed) str += "!@#$%^&*()_+";
        
        // Continue with your logic
        
        for (let i =   1; i < length; i++) {
            let char = Math.floor(Math.random)* str.length + 1
            pass = str.charAt(char)
    }
    setPassword(pass)

        
},[length , numberAllowed, charAllowed, setPassword])
  return (
    <div>
      <div className='bg-slate-400 '>
        <input type='text' readOnly> {password}</input>
         </div>
      
    </div>
  )
}

export default Hooks
