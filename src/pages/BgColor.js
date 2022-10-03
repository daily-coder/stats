import BgCard from "../components/BgCard/BgCard";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import WithLoading from "../components/WithLoading";

function BgColor() {
  const { cssData } = useContext(DataContext);
  // "background-color" property points to array of background-color values.
  const { "background-color": bgColors } =
    cssData.stats.declarations.properties;
  const uniqueBgColors = [...new Set(bgColors)];

  const bgColorElements = uniqueBgColors.map((bgColor) => {
    return <BgCard key={bgColor} bgColor={bgColor} />;
  });

  return <>{bgColorElements}</>;
}

export default WithLoading(BgColor);
