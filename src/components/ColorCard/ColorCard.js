import CopyBtn from "../CopyBtn";
import propTypes from "prop-types";

function ColorCard({ color }) {
  return (
    <div>
      <div className="group relative flex h-28 cursor-default flex-col items-center justify-center rounded-md bg-white shadow-md dark:bg-slate-800">
        <h2 style={{ color }} className="text-6xl">
          Aa
        </h2>
        <div className="absolute top-0 right-0 rounded-md bg-blue-700 text-white opacity-0 group-hover:opacity-100">
          <CopyBtn text={color}></CopyBtn>
        </div>
      </div>
      <p className="mx-4 mt-4 overflow-hidden overflow-ellipsis whitespace-nowrap text-center text-lg">
        {color}
      </p>
    </div>
  );
}

ColorCard.propTypes = {
  color: propTypes.string.isRequired,
};

export default ColorCard;
