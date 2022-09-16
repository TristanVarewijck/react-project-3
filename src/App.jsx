import { useState, useEffect } from "react";
import "./App.scss";

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

  const [allMemes, setAllMemes] = useState([]);

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
    const randomMeme = allMemes[randomNumber];
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        memeUrl: randomMeme.url,
      };
    });
  }

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

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
