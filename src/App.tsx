import { useState } from "react";
import "./App.css";
import MyButton from "./assets/component/my_button/my-button.componwnt";

function App() {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  let [disbly, setDisbly] = useState("");
  function disblyFun(num: string) {
    if (disbly.includes("=")) {
      disbly = ""
      setDisbly(disbly)

    }
    setDisbly(disbly + num)
  }

  function oreration() {
    setDisbly(disbly + "=")

    if (disbly.includes("+")) {
      let numbers = disbly.split("+");
      let [a, b] = [numbers[0], numbers[1]];
      setDisbly((disbly) => disbly += (parseInt(a) + parseInt(b)))
    } else {
      let numbers = disbly.split("-");
      let [a, b] = numbers;
      setDisbly((disbly) => disbly += (parseInt(a) - parseInt(b)))
    }

  }


  return (
    <div className="calculator">
      <div className="display">{disbly}</div>
      <div className="buttons">
        {numbers.map((val , index) => <MyButton key={index} num={val} onClick={() => disblyFun(val)} ></MyButton>)}
        <button onClick={() => disblyFun("+")} className="operator">+</button>
        <button onClick={() => disblyFun("-")} className="operator">-</button>
        <button onClick={oreration} className="equals">=</button>
      </div>
    </div>
  );
}

export default App;
