import { useParams } from "react-router-dom";

import Card from "../components/Card";
import { useDataContext } from "../components/DataProvider";
import WithLoading from "../components/WithLoading";
import PROPERTY_GROUP from "../property-group";
import { cssData } from "../types";

function hasOwnProperty<X extends object, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, string[]> {
  return Object.hasOwnProperty.call(obj, prop);
}

function Category() {
  const { id } = useParams();
  const { cssData } = useDataContext();
  const { properties } = (cssData as cssData).stats.declarations;

  if (id == null || !hasOwnProperty(PROPERTY_GROUP, id)) {
    return (
      <div role="alert">
        <p>No Such Category</p>
      </div>
    );
  }

  const categoryProperties = PROPERTY_GROUP[id];
  // categoryProperties -> [ css property, css property, ...]
  const CardElements = categoryProperties.map((categoryProperty) => {
    const length =
      properties[categoryProperty as keyof typeof properties]?.length || 0;
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
