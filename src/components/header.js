import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="one">
        Yankess
      </Link>
      <Link to="news" className="two">
        News
      </Link>
      <Link to="prospects" className="three">
        Prospects
      </Link>
    </div>
  );
}

export default Header;
