import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <nav className="flex w-full flex-row justify-between py-12">
      <Link to="/">
        <p className="flex flex-row items-center text-lg font-semibold text-gpv-headline transition hover:text-gray-200">
          <FaGithub className="mr-2" />
          {title}
        </p>
      </Link>
      <ul className="flex flex-row space-x-4 text-gpv-headline">
        <li className="transition hover:text-gpv-button">
          <Link to="/">Home</Link>
        </li>
        <li className="transition hover:text-gpv-button">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "GitHub Profile Viewer",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
