import { Link } from "react-router-dom";
import propTypes from "prop-types";
const SIZES = {
  regular: "px-4 py-2",
  large: "px-6 py-4",
};

function PageLink({ text, to, size }) {
  return (
    <Link
      className={`${SIZES[size]} mt-8 inline-block rounded-md bg-blue-700 text-lg font-semibold text-white hover:bg-blue-800`}
      to={to}
    >
      {text}
    </Link>
  );
}

PageLink.propTypes = {
  text: propTypes.string.isRequired,
  to: propTypes.string.isRequired,
  size: propTypes.string.isRequired,
};

export default PageLink;
