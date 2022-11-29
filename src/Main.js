import { useState, useEffect } from "react";

export default function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://ghibliapi.herokuapp.com/species";
    fetch(url)
      .then((res) => {
        res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main">
      <h1>Main</h1>
    </div>
  );
}
