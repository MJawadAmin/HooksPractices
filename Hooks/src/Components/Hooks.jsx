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
    <div>
      <div className="bg-slate-400 p-4">  
        <div className="mt-4">
          <label>Generated Password:</label>
          <input
            type="text"
            value={password}
            readOnly
            className="ml-2 p-1 border w-full"
          />
           <br />
           <br />

<label>
          Length:
          <input
            type="number"
            value={length}
            min="4"
            max="20"
            onChange={(e) => setLength(Number(e.target.value))}
            className="ml-2 p-1 border"
          />
        </label>
        <br />
        <label>
          Include Numbers:
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={(e) => setNumberAllowed(e.target.checked)}
            className="ml-2"
          />
        </label>
        <br />
        <label>
          Include Special Characters:
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={(e) => setCharAllowed(e.target.checked)}
            className="ml-2"
          />
        </label>
        </div>
      </div>
    </div>
  );
};

export default Hooks;
