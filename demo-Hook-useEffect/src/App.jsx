import { useEffect, useState } from 'react'
import './App.css'


function App() {

  const [text, setText] = useState('');

  // Use of useEffect Hook

  // 1st varient: once the UI render firstly and then each time UI re-renders
  // useEffect(() => {
  //   console.log('this is use-effect');
  // });

  // 2nd varient: only when the UI render firstly
  // useEffect(() => {
  //   console.log('the UI is renderd');
  // }, []);

  // 3rd varient: once the UI render firstly and then each time value of text changes
  // useEffect(() => {
  //   console.log('change is detected and useEffect');
  // }, [text]);

  // varient 4: firtly UI render and to remove/unmount component
  useEffect(() => {
    console.log('eventlistner added');

    return () => {
      console.log('old eventlistner removed');
    }
  }, [text]);
  
  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  
  return (
    <>
      <h1>leaning useEffect hook</h1>
      <h2>open console and input value in this box </h2>
      <input type="text" onChange={changeHandler} />
    </>
  )
}

export default App
