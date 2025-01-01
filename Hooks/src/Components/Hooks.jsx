import {useCallback, useEffect, useState} from 'react'

const Hooks = () => {
    const [length , setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState(""); 
    const PasswordGenarator= useEffect(()=>{
        const pass= ""
        const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (let i =   1; i < length; i++) {
            let char = Math.floor(Math.random)* str.length + 1

    }
        
},[length , numberAllowed, charAllowed, setPassword])
  return (
    <div>
      
    </div>
  )
}

export default Hooks
