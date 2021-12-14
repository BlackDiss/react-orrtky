import React, { useState } from "react";
import "./style.css";
function sum(a,b){
  return a+b;
}
// html tegs
// div and header - блочные
// p and span - строчные
// input - блочный
//
console.log(sum(2,4))
export default function App() {
  const [EmailText, setEmailText] = useState('');

  const handleChangeInput = (e) => {
      setEmailText(e.target.value)
  }
  const onAutorize = () => {
      cosole.log('Autorize')
  }
  return (
    <div>
     <header className="HeaderBlock">Заголовок</header>
        
          <div className="EmailForm" > 

            <input
            className="EmailField"
            type="text"
            value ={EmailText} 
            placeholder="Login"
            onChange ={handleChangeInput}
            />
            
            <input
            className="EmailField"
            type="password"
            placeholder="Password"
            /> 
            <div>
            <button className="Button" 
            onClick={onAutorize}
            > Autorize</button>
            </div>
          </div>
          
      

    </div>
  )
}
