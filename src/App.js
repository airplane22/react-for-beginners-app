import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { resetWarningCache } from "prop-types";



function App() {

 const [loading, setLoading] = useState(true);
 const [coins, setCoins] = useState([]);
 const [coin, setCoin] = useState(false);
 const [userInput, setUserInput] = useState(0);
 const [inverted, setInverted] = useState('false');

 useEffect(() => {
  fetch("https://api.coinpaprika.com/v1/tickers")
  .then((response)=>response.json())
  .then((json) => {
    setCoins(json); 
    setLoading(false);})
 }, []);

 const onChange = (event) => {
   setUserInput(event.target.value);
  };
  
 const onSelectChange = (event) => {
   setCoin(coins[event.target.value]);
  };

 const reset = ()=>setUserInput(0);
 const onInvert = () => {
  setInverted((current) => !current);
  reset();
 };
 
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (<strong>"Loading..."</strong>) 
      :(
      <div>  
      <select onChange={onSelectChange}>
      {coins.map((coin, index)=>
        <option key={index} value={index}>
        {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
        </option>) }
      </select>
              
        {!coin? 
        'Plz select your coin' :
         inverted ? 
          (<div>
            <input value={userInput} onChange={onChange} placeholder="plz write coins"></input> {coin.symbol}
            <button onClick = {onInvert}>INVERT</button>
            <h2>equals {coin.quotes.USD.price * userInput} USD</h2> 
          </div>) 
        : (<div>
            <input value={userInput} onChange={onChange} placeholder="plz write USD"></input> USD
            <button onClick = {onInvert}>INVERT</button>
            <h2>equals {userInput / coin.quotes.USD.price} {coin.symbol}</h2> 
          </div>) 
        
        }
        
    </div>
      )}
      
    </div>
  );
}

export default App;


// missions
// set default value at select 
// write commas to input number by 3 digits
// multiselect
// UI