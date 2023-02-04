/**
 * description could be string or number.
 *
 * heading      |   filesize          |    rules
 * description  |   10kb(string)      |    100(number)
 *
 */

interface CardProps {
  heading: string;
  description: string | number;
}

function Card({ heading, description }: CardProps) {
  return (
    <div className="flex h-28 flex-col items-center justify-center rounded-md bg-white text-lg shadow-md dark:bg-slate-800">
      <h2>{heading}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
}

export default Card;
