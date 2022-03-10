import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyWord] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyWord(event.target.value);
  console.log('render');
  useEffect(()=> {
    console.log("I run only once");
  }, []); // watch nothing, only change once(at first load)
  useEffect(()=> {
    if (keyword !=="" && keyword.length > 6) { //??? 
      console.log("I run when 'keyword changes", keyword);
    }
  }, [keyword]); // keyword 변화할 때만 실행 - run only when keyword changes

  useEffect(()=> {
      console.log("I run when 'counter' changes");
  }, [counter]);

  useEffect(()=>{
    console.log("I run when 'keyword' and 'counter' changes");
  }, [keyword, counter]);

  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange} 
      type="text" 
      placeholder="Search here"></input>
      <h1 >{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
