import { Info, RotateCcw } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FruitItem, ActionType } from "../../lib/types/types";

const actionMap: Record<ActionType, (prev: FruitItem[]) => FruitItem[]> = {
  push: (prev) => [...prev, { id: "banana", value: "🍌" }],
  pop: (prev) => prev.slice(0, -1),
  shift: (prev) => prev.slice(1),
  unshift: (prev) => [{ id: "banana", value: "🍌" }, ...prev],
  slice: (prev) => prev.slice(0, 3),
  reverse: (prev) => [...prev.reverse()],
  splice: (prev) => {
    const newFruits = [...prev];
    newFruits.splice(2, 0, { id: "orange", value: "🍊" });
    return [...newFruits];
  },
};

function Card({
  name,
  fruits: initialFruits,
  action,
  explanation,
  code,
}: {
  name: string;
  fruits: FruitItem[];
  action: ActionType;
  explanation: string;
  code: string;
}) {
  const [fruitItems, setFruitItems] = useState(initialFruits);
  const [isFlipped, setIsFlipped] = useState(false);
  const handleAction = () => {
    if (actionMap[action]) {
      setFruitItems(actionMap[action](fruitItems));
    }
  };

  const handleReset = () => {
    setFruitItems(initialFruits);
  };

  const isMaxSize = fruitItems.length >= 8;
  const isAddOperation = name.includes("push") || name.includes("unshift");

  const getExitAnimation = () => {
    if (name.includes("pop")) {
      return { scale: 0, opacity: 0, x: 100 };
    } else if (name.includes("shift")) {
      return { scale: 0, opacity: 0, x: -100 };
    } else if (name.includes("reverse")) {
      return { scale: 0, opacity: 0, rotateY: 180 };
    }
    return { scale: 0, opacity: 0 };
  };

  return (
    <div
      className="bg-white w-80 h-80 flex rounded-2xl flex-col p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 perspective-1000"
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`p-2 flex items-center justify-between rounded-xl text-neutral-900 font-semibold text-sm ${
          isFlipped ? "hidden" : "block"
        }`}
      >
        <div>{name}</div>
        <div className="flex flex-row gap-2">
          <div
            className="cursor-pointer border-2 p-1"
            onMouseEnter={() => setIsFlipped(true)}
          >
            <Info />
          </div>
          <div className="cursor-pointer border-2 p-1" onClick={handleReset}>
            <RotateCcw />
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 flex items-center justify-center rounded-xl font-semibold text-lg relative">
        <motion.div
          className="w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front of card */}
          <div
            className={`flex items-center justify-center w-full h-full backface-hidden ${
              isFlipped ? "hidden" : "block"
            }`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex flex-row flex-wrap gap-4 justify-center items-center max-w-xl">
              <AnimatePresence mode="popLayout">
                {fruitItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={getExitAnimation()}
                    transition={{ duration: 0.3 }}
                    className="bg-neutral-800 p-4 rounded-md w-12 h-12 flex items-center justify-center font-medium text-white"
                  >
                    {item.value}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Back of card */}
          <div
            className={`absolute w-full h-full backface-hidden ${
              isFlipped ? "block" : "hidden"
            }`}
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="flex flex-col items-start gap-2 h-full text-sm text-left">
              <div className="overflow-y-auto w-full">
                <p className="text-neutral-700">{explanation}</p>
              </div>
              <div className="overflow-y-auto w-full">
                <pre className="text-neutral-200 text-xs bg-neutral-800 p-2 rounded-lg font-mono whitespace-pre-wrap">
                  {code}
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div
        className={`p-4 flex items-center justify-center text-neutral-900 font-semibold text-lg border-t border-neutral-200 ${
          isFlipped ? "hidden" : "block"
        }`}
      >
        <button
          onClick={handleAction}
          disabled={isAddOperation && isMaxSize}
          className={`bg-yellow-300 text-sm border-2 border-neutral-900 text-neutral-900 px-4 py-2 transition-colors ${
            isAddOperation && isMaxSize
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer hover:bg-yellow-400"
          }`}
        >
          {name}
        </button>
      </div>
    </div>
  );
}

export default Card;
