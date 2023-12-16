import React from "react";
import "./index.css";
const App = () => {
  const names = [
    "Solomon Tadesse",
    "Tewuhbo",
    "Yeabsira Gebremichael",
    "Yeabtsega Tesfaye Tegegn",
    "Yohana Nekuria",
    "Yohannes Tigistu worku",
    "Yonas W. Degefu",
    "YONATAN ALAMIREW DARGE",
    "Zeid Hussen Endris",
    "Sumaya Omar Ibrahim ",
  ];
  return (
    <div className="list">
      <ul class="myul">
        <h2>GDSC React Group 5 </h2>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
