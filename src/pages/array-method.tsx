import Header from "../components/header";
import ArrayMethodCard from "../components/array-method-card";
const arrayMethods = [
  {
    name: "push",
    explanation:
      "Adds one or more elements to the end of an array and returns the new length of the array.",
  },
];

function ArrayMethod() {
  return (
    <div className="min-h-screen geist-mono-font font-bold bg-neutral-900 text-zinc-300">
      <Header title="Array" subtitle="Immutable Methods" />
      <div className="container flex-wrap justify-center items-center flex flex-row gap-6 mx-auto p-8">
        {arrayMethods.map((method) => (
          <ArrayMethodCard key={method.name} {...method} />
        ))}
      </div>
    </div>
  );
}

export default ArrayMethod;
