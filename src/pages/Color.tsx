import ColorCard from "../components/ColorCard";
import { useDataContext } from "../components/DataProvider";
import WithLoading from "../components/WithLoading";
import { cssData } from "../types";

function Color() {
  const { cssData } = useDataContext();
  // WithLoading prevents cssData as null.
  // color property points to array of color values.
  const { color: colors } = (cssData as cssData).stats.declarations.properties;
  const uniqueColors = [...new Set(colors)];

  const colorElements = uniqueColors.map((color) => {
    return <ColorCard key={color} color={color} />;
  });

  return <>{colorElements}</>;
}

export default WithLoading(Color);
