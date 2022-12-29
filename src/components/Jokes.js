import React, { useState, useEffect } from "react";
import axios from "axios";
import "./joke.css";

const Jokes = () => {
  const [setUp, setSetUp] = useState("");
  const [delivery, setDelivery] = useState("");
  const [newJoke, setnewJoke] = useState(0);
  const [genre, setGenre] = useState("Programming");

  useEffect(() => {
    axios.get(`https://v2.jokeapi.dev/joke/${genre}`).then((data) => {
      if (data.data.type === "single") {
        setSetUp(data.data.joke);
        setDelivery("");
      } else {
        setSetUp(data.data.setup);
        setDelivery(data.data.delivery);
      }
    });
  }, [genre, newJoke]);

  const getNewJoke = () => {
    setnewJoke(newJoke + 1);
  };

  const handleGenre = (genre) => {
    setGenre(genre);
  };

  return (
    <>
      <h1 className="heading">Jokes Outright &#128514;</h1>
      <nav className="nav">
        <ul>
          <li
            onClick={() => handleGenre("Programming")}
            style={{
              backgroundColor: genre === "Programming" && `rgb(175, 183, 185)`,
            }}
          >
            Programming
          </li>
          <li
            onClick={() => handleGenre("Misc")}
            style={{
              backgroundColor: genre === "Misc" && `rgb(175, 183, 185)`,
            }}
          >
            Misc
          </li>
          <li
            onClick={() => handleGenre("Dark")}
            style={{
              backgroundColor: genre === "Dark" && `rgb(175, 183, 185)`,
            }}
          >
            Dark
          </li>
          <li
            onClick={() => handleGenre("Pun")}
            style={{
              backgroundColor: genre === "Pun" && `rgb(175, 183, 185)`,
            }}
          >
            Pun
          </li>
          <li
            onClick={() => handleGenre("Spooky")}
            style={{
              backgroundColor: genre === "Spooky" && `rgb(175, 183, 185)`,
            }}
          >
            Spooky
          </li>
          <li
            onClick={() => handleGenre("Christmas")}
            style={{
              backgroundColor: genre === "Christmas" && `rgb(175, 183, 185)`,
            }}
          >
            Christmas
          </li>
        </ul>
      </nav>
      <div className="joke-container">
        <p className="title">{genre} Joke</p>
        <p className="joke">
          {setUp}{delivery}
        </p>
        <button onClick={getNewJoke}>Get new joke</button>
      </div>
      <footer>JokesOutright.netlify.app &#169; 2022 </footer>
    </>
  );
};

export default Jokes;
