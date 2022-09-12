import "./Form.scss";

function Form() {
  return (
    <form className="meme-form">
      <div className="input-group">
        <input type="text" placeholder="Top Text" />
        <input type="text" placeholder="Bottom Text" />
      </div>
      <button type="submit">Get a new meme image 🖼</button>
    </form>
  );
}

export default Form;
