import { Link } from "react-router-dom";

const SIZES = {
  regular: "px-4 py-2",
  large: "px-6 py-4",
};

interface PageLinkProps {
  text: string;
  to: string;
  size: "regular" | "large";
}

function PageLink({ text, to, size }: PageLinkProps) {
  return (
    <Link
      className={`${SIZES[size]} mt-8 inline-block rounded-md bg-blue-700 text-lg font-semibold text-white hover:bg-blue-800`}
      to={to}
    >
      {text}
    </Link>
  );
}

export default PageLink;
