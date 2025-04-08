import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if(numAllowed) str += "1234567890";
    if(charAllowed) str += "~!@#$%^&*?,._-=+";
    for(let i=1; i<=length; i++){
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }
    setPassword(pass);
  },
   [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);

  }, [password]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-black-500 font-bold bg-gray-700'>
        <h1 className='text-white text-center font-bold m-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input
            type="text"
            value = {password}
            className='outline-none w-full py-1 px-3 '
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none w-14 py-1 px-3 bg-amber-400 pb-2 shrink-0'
                  onClick={copyPasswordToClipboard}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-6 text-orange-400'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={99}
              value={length}
              className='accent-amber-400 cursor-pointer '
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1 text-orange-400'>
            <input
              type='checkbox'
              defaultChecked={numAllowed}
              id='numberInput'
              className='accent-amber-400 '
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
              />
              <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charAllowed}
              id='charInput'
              className='accent-amber-400 '
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              />
              <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App



