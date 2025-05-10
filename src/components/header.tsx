import { Link } from "react-router";

export default function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-row justify-between items-center p-8">
      <h1 className=" flex justify-items-center justify-center items-center text-xl gap-2">
        <span className="bg-yellow-300 p-2 text-black">{title}</span>
        <span className="text-zinc-300">{subtitle}</span>
      </h1>
      <div className="flex flex-row gap-2">
        <Link
          to="/"
          className="bg-yellow-300 cursor-pointer text-neutral-900 px-4 py-2 "
        >
          Back
        </Link>
      </div>
    </div>
  );
}
