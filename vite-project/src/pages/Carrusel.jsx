// import React, { useState } from "react";
// import dragon from "../assets/GokuVsVegeta.png";
// import onePiece from "./assets/OnePiece.png";
// import sailorMoon from "./assets/SailorMoon.png";
// import naruto from "./assets/Naruto.png";


import React, { useState } from "react";
import dragon from "../assets/gokuVsVegeta.png";
import onePiece from "../assets/onePiece.png";
import sailorMoon from "../assets/sailorMoon.png";
import naruto from "../assets/naruto.png";




export default function Carousel() {
  const images = [dragon, onePiece, sailorMoon,naruto];
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % images.length);
  const prevSlide = () =>
    setIndex((index - 1 + images.length) % images.length);

  return (
    <div style={{ width: "20%", margin: "0 auto", textAlign: "center" }}>
      
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        style={{ width: "100%", height: "auto" , marginTop: "20px"  }}
      />
      {/* <button onClick={prevSlide}>{"<"}</button> */}
      <button onClick={prevSlide}>{<i className="fa-solid fa-backward"></i>}</button>
      <button onClick={nextSlide}>{<i className="fa-solid fa-forward"></i>}</button>  
    </div>
  );
}
