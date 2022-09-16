import "./ImageBox.scss";

function ImageBox({ memeData }) {
  return (
    <div className="image-box">
      <h2 className="top-text">{memeData.topText}</h2>
      <img src={memeData.memeUrl} alt="meme-img" />
      <h2 className="bottom-text">{memeData.bottomText}</h2>
    </div>
  );
}

export default ImageBox;
