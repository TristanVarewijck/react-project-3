import { useState } from "react";

import "./App.scss";
import memes from "./memesData.json";

// components
import Header from "./components/Header";
import Form from "./components/Form";
import ImageBox from "./components/ImageBox";

function App() {
  const [meme, setMeme] = useState({
    topText: "Top Text",
    bottomText: "Bottom Text",
    memeUrl: "https://i.imgflip.com/4xgqu.jpg",
  });

  function inputHandler(e) {
    const { value, name } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  function submitHandler() {
    const randomNumber = Math.floor(Math.random() * 100);
    const randomMeme = memes[randomNumber];
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        memeUrl: randomMeme.url,
      };
    });
  }

  return (
    <div className="App">
      <Header />
      <Form
        onChangeHandler={inputHandler}
        onSubmitHandler={submitHandler}
        memeData={meme}
      />
      <ImageBox memeData={meme} />
    </div>
  );
}

export default App;
