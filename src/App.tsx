import { Link } from "react-router";

const links = [
  {
    name: "Array",
    children: [
      {
        name: "Array Mutating Methods",
        path: "/array-mutating-methods",
      },
      {
        name: "Array Methods",
        path: "/array-methods",
      },
    ],
  },
];

function App() {
  return (
    <div className="min-h-screen geist-mono-font bg-neutral-900 text-zinc-300">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-row gap-4">
          {links.map((link) => (
            <div key={link.name} className="flex flex-col gap-2">
              <div className="text-lg font-bold p-2 ">{link.name}</div>
              {link.children.map((child) => (
                <div
                  key={child.name}
                  className="border bg-amber-300 text-neutral-900 border-neutral-800 rounded-md p-4"
                >
                  <Link to={child.path}>{child.name}</Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
