import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../style/styles.css'
import Note from "./Note";

function App(){
  return( <div>
  <h1 className="heading">My Contact</h1>
  <div className="card">
    <div className="top">
      <h2 className="name">Beyonce</h2>
      <img
      className="circle-img"
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
      />

    </div>
    <div className="bottom">
      <p>+435 763 980</p>
      <p>oladejo@gmail.com</p>
    </div>

  </div>
  <div className="card">
    <div className="top">
      <h2 className="name">Jack Bauer</h2>
      <img
      className="circle-img"
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" 
      />

    </div>
    <div className="bottom">
      <p>+656 787 564</p>
      <p>jack@gmail.com</p>

    </div>

  </div>


  </div>
  );
}
export default App;