import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  return (
    <div className="App">
      <h1>Image uploading react</h1>
      {data.map((singleData) => {
        console.log(singleData.img.data.data);

        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(singleData.img.data.data))
        );
        return <img src={`data:image/png;base64,${base64String}`} width="300"/>
      })}
    </div>
  );
}

export default App;