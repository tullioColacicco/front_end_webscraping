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
      <Link to="soto" className="three">
        Juan Soto
      </Link>
    </div>
  );
}

export default Header;
