import Card from "../components/Card";
import { useDataContext } from "../components/DataProvider";
import WithLoading from "../components/WithLoading";
import { cssData } from "../types";

function Overview() {
  const { cssData } = useDataContext();
  //  WithLoading prevents cssData as null
  const { stats } = cssData as cssData;

  const overview = {
    "File Size": stats.humanizedSize,
    "Gzip Size": stats.humanizedGzipSize,
    Rules: stats.rules.total,
    Selectors: stats.selectors.total,
    Declarations: stats.declarations.total,
    Properties: Object.keys(stats.declarations.properties).length,
    Id: stats.selectors.id,
    Class: stats.selectors.class,
    "Pseudo Class": stats.selectors.pseudoClass,
    "Pseudo Element": stats.selectors.pseudoElement,
  };

  const overviewElements = Object.entries(overview).map(([key, value]) => {
    return <Card key={key} heading={key} description={value} />;
  });

  return <>{overviewElements}</>;
}

export default WithLoading(Overview);
