import React, { useState } from "react";
import "./styles.css";

//rMO47RTD5dmv8IS_Tc4Hgk1kMCXLWdvnZXwccfaxzDA

export default function App() {
  const [value, setValue] = useState();
  const [result, setResult] = useState([]);
  const fetchImage = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=rMO47RTD5dmv8IS_Tc4Hgk1kMCXLWdvnZXwccfaxzDA&query=${value}&orientation=squarish`
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        setResult(data.results);
      });
  };
  return (
    <div className="App">
      <div className="myDiv">
        <img
          className="logo"
          src={
            "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/unsplash-512.png"
          }
          alt=""
        />
        <input
          type="text"
          style={{ width: "60%" }}
          placeholder="free high resolution images"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={fetchImage}>search</button>
      </div>
      <div className="gallery">
        {result.map((item) => {
          return (
            <img
              className="item"
              key={item.id}
              src={item.urls.regular}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}
