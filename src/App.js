import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";



function Hello() {
  useEffect(() => { 
    console.log("created!"); // runs only when component is first created
    return () => console.log("destroyed:("); // cleanup function : runs when component is destroyed, not used very often
  }, []); 
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev)=>!prev);
  return (
    <div>
      {showing?<Hello/> : null}
      <button onClick={onClick}>{showing? "hide" : "show"}</button>
    </div>
  );
}

export default App;
