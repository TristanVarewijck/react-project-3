import "./ImageBox.scss";

function ImageBox() {
  return (
    <div className="image-box">
      {/* meme img */}
      <h2 className="top-text">Top Text</h2>
      <img src="/assets/meme-example.png" alt="meme-img" />
      <h2 className="bottom-text">Bottom Text</h2>
    </div>
  );
}

export default ImageBox;
