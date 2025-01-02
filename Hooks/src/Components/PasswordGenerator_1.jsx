import { useState, useEffect } from "react";

const Hooks = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    let pass = "";
    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
   <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-600">
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8" >
        <input type="text"
        placeholder="Password"
        className="w-full outline-none py-1 px-2"
        value={password}
        readOnly
        /> 
        <button className="bg-blue-700 text-white rounded-md px-5 py-3">copy</button>
    </div>
    <div>
    <div>
        <input></input>
    </div>
    </div>
   </div>

   
   
   
   </>
  );
};

export default Hooks;
