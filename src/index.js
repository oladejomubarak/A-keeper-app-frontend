import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

function Card(props){
  return(
    <div>
     
       <h2>{props.name}</h2>
    <img
    src={props.img} 
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
    </div>

  );
}
ReactDOM.render(
  <div>
     <App />
    {/* <h1>My Contacts</h1>
    <Card name ="Beyonce" img ="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
       tel = "+123 456 789" email= "b@beyonce.com" />
       <input id="fname"  placeholder="What is ur name?" value="Mubarak" contentEditable= "true" />

       <Card name ="Jack Bauer" img ="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
       tel = "+456 874 436" email= "jack@nowhere.com" />
       <input id="fname"  placeholder="What is ur name?" value="Mubarak" contentEditable= "true" /> */}
  </div>, document.getElementById("root"));
