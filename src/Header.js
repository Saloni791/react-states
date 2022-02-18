import React from "react";

export default function Header(props) {
  console.log(props)
  return (
    <div>
     <header onClick={props.name1}> {props.name} </header> 
    </div>
  );
}
