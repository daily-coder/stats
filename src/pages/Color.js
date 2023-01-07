import { useContext } from "react";

import ColorCard from "../components/ColorCard/ColorCard";
import WithLoading from "../components/WithLoading";
import { DataContext } from "../context/DataContext";

function Color() {
  const { cssData } = useContext(DataContext);
  // color property points to array of color values.
  const { color: colors } = cssData.stats.declarations.properties;
  const uniqueColors = [...new Set(colors)];

  const colorElements = uniqueColors.map((color) => {
    return <ColorCard key={color} color={color} />;
  });

  return <>{colorElements}</>;
}

export default WithLoading(Color);
