import {useState} from 'react'

const Hooks = () => {
    const [length , setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const PasswordGanerator=()=>{
        if (numberAllowed) str+= "01234567689"
    }
  return (
    <div>
      
    </div>
  )
}

export default Hooks
