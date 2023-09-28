import { useState, useCallback, useEffect, useRef } from 'react'


function App() {

  let [length, setLength] = useState(8);
  let [number, setNumber] = useState(false);
  let [char, setChar] = useState(false);
  let [password, setPassword] = useState("");

  //useRef hook 
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz";

    if (number) {
      str += '1234567890';
    }
    if (char) {
      str += '~`!@#$%^&*()_+}{[]:;<>,.?/=-';
    }

    for (let i = 1; i <= length; i++) {
      let idx = Math.round(Math.random() * str.length + 1);
      pass += str.charAt(idx);
    }
    setPassword(pass);

  }, [length, number, char, setPassword])

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, number, char, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md max-h-screen mx-auto shadow-lg rounded-lg px-4 py-4 my-10 text-orange-500 bg-gray-800 '>
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className=' outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          ></input>
          <button
            onClick={copyPassToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-4'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev)
              }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={char}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev)
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
