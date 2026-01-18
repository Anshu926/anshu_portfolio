import { Link } from "react-router-dom";
import "./Universal.css";

function Universal() {
  return (
    <div className="universal-container">
      <div className="universal-card">
        <h1 className="universal-code">404</h1>
        <h2 className="universal-title">Page Not Found</h2>

        <p className="universal-message">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link to="/" className="universal-home-btn">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default Universal;
