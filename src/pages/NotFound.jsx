import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mx-auto max-w-prose">
      <h1 className="mb-3 text-4xl font-semibold text-gpv-headline">404</h1>
      <p className="mb-3 text-gpv-paragraph">
        The page you are looking for doesn't exist...{" "}
        <Link to="/" className="text-gpv-button transition hover:underline">
          Click here
        </Link>{" "}
        to go back home.
      </p>
    </div>
  );
};

export default NotFound;
