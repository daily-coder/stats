import { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import WithLoading from "../components/WithLoading";
import { DataContext } from "../context/DataContext";
import PROPERTY_GROUP from "../property-group";

function Category() {
  const { id } = useParams();
  const { cssData } = useContext(DataContext);
  const { properties } = cssData.stats.declarations;
  const categoryProperties = PROPERTY_GROUP[id];

  // categoryProperties -> [ css property, css property, ...]

  const CardElements = categoryProperties.map((categoryProperty) => {
    const length = properties[categoryProperty]?.length || 0;
    return (
      <Card
        key={categoryProperty}
        heading={categoryProperty}
        description={length}
      />
    );
  });

  return <>{CardElements}</>;
}

export default WithLoading(Category);
