import { Link } from "react-router-dom";
import './MainPage.css';

export function MainPage() {
  // script

  // JSX
  return (
    <div id="main-body">
      <div>
        <h1 id="main-h1">MainPage</h1>
          <button><Link to="/login">kakaoLogin</Link></button>
        <div id="main-button">
          <button><Link to="/:userId">myRecord</Link></button>
          <button><Link to="/game">game</Link></button>
          <button><Link to="/backing">backing</Link></button>
        </div>
      </div>
    </div>

  )
}
export default MainPage;

// Three Function