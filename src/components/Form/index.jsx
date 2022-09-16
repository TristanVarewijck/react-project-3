import "./Form.scss";

function Form({ onSubmitHandler, onChangeHandler, memeData }) {
  console.log(onSubmitHandler);
  return (
    <div className="meme-form">
      <div className="input-group">
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          onChange={onChangeHandler}
          value={memeData.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          onChange={onChangeHandler}
          value={memeData.bottomText}
        />
      </div>
      <button type="submit" onClick={onSubmitHandler}>
        Get a new meme image 🖼
      </button>
    </div>
  );
}

export default Form;
