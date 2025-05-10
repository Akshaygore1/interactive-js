import { Info, RotateCcw } from "lucide-react";

function ArrayMethodCard({
  name,
  explanation,
}: {
  name: string;
  explanation: string;
}) {
  return (
    <div className="bg-white w-80 h-80 flex rounded-2xl flex-col p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 perspective-1000">
      <div className="p-2 flex items-center justify-between rounded-xl text-neutral-900 font-semibold text-sm">
        <div>{name}</div>
        <div className="flex flex-row gap-2">
          <div className="cursor-pointer border-2 p-1">
            <Info />
          </div>
          <div className="cursor-pointer border-2 p-1">
            <RotateCcw />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArrayMethodCard;
