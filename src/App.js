import React,{useState} from "react";
import "./style.css";
import Header from "./Header"

export default function App() {

  const[name, setName] = useState("Hello")
  
  function handleClick(){
    setName("Saloni");
  }
  return (

    <div>
      <Header name={name} name1={handleClick}/>
    </div>
  );
}
