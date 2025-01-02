import { useState, useEffect, useCallback, useRef } from "react";

const Hooks = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    let pass = "";
    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const passwordCopyFromClip = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopyButtonText("Copied"); // Change button text to "Copied"
    setTimeout(() => setCopyButtonText("Copy"), 2000); // Reset to "Copy" after 2 seconds
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-600">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8">
          <input
            type="text"
            placeholder="Password"
            className="w-full outline-none py-1 px-2"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-700 text-white rounded-md px-5 py-3"
            onClick={passwordCopyFromClip}
          >
            {copyButtonText}
          </button>
        </div>
        <div>
          <div>
            <label>Length {length}</label>
            <input
              type="range"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              min={4}
              max={20}
              className="cursor-pointer"
            />

            <label> Numbers {numberAllowed}</label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed(!numberAllowed);
              }}
            />

            <label> Special Chars {charAllowed}</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="specialcharsinput"
              onChange={() => {
                setCharAllowed((currentState) => !currentState);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hooks;
