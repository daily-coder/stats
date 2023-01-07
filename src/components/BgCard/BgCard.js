import propTypes from "prop-types";

import CopyBtn from "../CopyBtn";

function BgCard({ bgColor }) {
  return (
    <div>
      <div
        style={{ backgroundColor: bgColor }}
        className="group relative h-28 cursor-default rounded-md bg-white shadow-md"
        data-testid="bg-card"
      >
        <div className="absolute top-0 right-0 rounded-md bg-blue-700 text-white opacity-0 group-hover:opacity-100">
          <CopyBtn text={bgColor}></CopyBtn>
        </div>
      </div>
      <p className="mx-4 mt-4 overflow-hidden overflow-ellipsis whitespace-nowrap text-center text-lg">
        {bgColor}
      </p>
    </div>
  );
}

BgCard.propTypes = {
  bgColor: propTypes.string.isRequired,
};

export default BgCard;
