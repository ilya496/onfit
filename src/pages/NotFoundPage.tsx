import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="error">
      <div className="container">
        <h1 className="section-title">404</h1>
        <p className="section-text">
          We are sorry, but this page does not exist ;(
        </p>
        <p className="section-text">
          Go back to the{" "}
          <Link to="/" className="section-link">
            home page
          </Link>
        </p>
      </div>
    </section>
  );
}

export default NotFoundPage;
