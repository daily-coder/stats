export function hasOwnProperty<X extends object, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, string[]> {
  return Object.hasOwnProperty.call(obj, prop);
}
