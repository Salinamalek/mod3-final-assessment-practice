import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <div>
        <span>
          <Link to="/">Home</Link>

          <Link to="/Main">Main</Link>
        </span>
      </div>
    </div>
  );
}
