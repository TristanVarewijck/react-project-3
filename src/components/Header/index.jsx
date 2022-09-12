import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <img src="/assets/trollFace.svg" alt="Troll Face Image" />
            <h1>Meme Generator</h1>
          </li>
          <li>React Course - Project 3</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
