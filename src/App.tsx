import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [inputValue, setInputValue] = useState("11");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/[^0-9]/g, "");
    // Limit to 2 digits
    const trimmed = value.slice(0, 2);
    setInputValue(trimmed);
  };

  const getNextNumber = () => {
    return inputValue === "" ? 1 : parseInt(inputValue, 10);
  };

  const incrementInputValue = () => {
    const nextVal = getNextNumber() + 1;
    setInputValue(nextVal.toString());
  };

  return (
    <div className="min-h-screen geist-mono-font bg-neutral-900 text-zinc-300">
      <div className="container min-h-screen flex items-center justify-center mx-auto p-8 flex-col gap-8">
        <h1 className="text-2xl font-bold mb-4">Array Operations Demo</h1>

        <div className="flex flex-row flex-wrap gap-4 justify-center items-center max-w-xl">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                className="bg-neutral-800 p-4 rounded-md w-12 h-12 flex items-center justify-center font-medium"
              >
                {item}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-md">
          <div className="flex items-center gap-4 justify-between">
            <div className="text-neutral-400 text-sm w-32">Array.pop()</div>
            <button
              className="bg-neutral-200 text-neutral-900 px-4 py-2 rounded-md flex items-center justify-center cursor-pointer hover:bg-neutral-300 transition-colors"
              onClick={() => {
                setItems([...items.slice(0, -1)]);
                // setInputValue("");
              }}
            >
              Pop
            </button>
          </div>
          <div className="flex items-center gap-4 justify-between">
            <div className="text-neutral-400 text-sm w-32 flex items-center">
              Array.push(
              <input
                type="text"
                inputMode="numeric"
                value={inputValue}
                onChange={handleInputChange}
                className="bg-neutral-900 text-zinc-300 p-1 rounded-md min-w-2 text-center focus:outline-none focus:ring-0 focus:ring-offset-0"
              />
              )
            </div>
            <button
              className="bg-neutral-200 text-neutral-900 px-4 py-2 rounded-md flex items-center justify-center cursor-pointer hover:bg-neutral-300 transition-colors"
              onClick={() => {
                setItems([...items, getNextNumber()]);
                incrementInputValue();
              }}
            >
              Push
            </button>
          </div>
          <div className="flex items-center gap-4 justify-between">
            <div className="text-neutral-400 text-sm w-32 flex items-center">
              Array.unshift(
              <input
                type="text"
                inputMode="numeric"
                value={inputValue}
                onChange={handleInputChange}
                className="bg-neutral-900 text-zinc-300 p-1 rounded-md min-w-2 text-center focus:outline-none focus:ring-0 focus:ring-offset-0"
              />
              )
            </div>
            <button
              className="bg-neutral-200 text-neutral-900 px-4 py-2 rounded-md flex items-center justify-center cursor-pointer hover:bg-neutral-300 transition-colors"
              onClick={() => {
                setItems([getNextNumber(), ...items]);
                incrementInputValue();
              }}
            >
              Unshift
            </button>
          </div>
          <div className="flex items-center gap-4 justify-between">
            <div className="text-neutral-400 text-sm w-32">Array.shift()</div>
            <button
              className="bg-neutral-200 text-neutral-900 px-4 py-2 rounded-md flex items-center justify-center cursor-pointer hover:bg-neutral-300 transition-colors"
              onClick={() => setItems([...items.slice(1)])}
            >
              Shift
            </button>
          </div>
          <div className="flex items-center gap-4 justify-between">
            <div className="text-neutral-400 text-sm w-32">
              Array.splice(index, 0, value)
            </div>
            <button className="bg-neutral-200 text-neutral-900 px-4 py-2 rounded-md flex items-center justify-center cursor-pointer hover:bg-neutral-300 transition-colors">
              Splice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
