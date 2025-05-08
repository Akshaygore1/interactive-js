import Card from "../components/Card";
import type { FruitItem, ActionType } from "../../lib/types/types";

type ArrayMethod = {
  name: string;
  fruits: FruitItem[];
  action: ActionType;
  explanation: string;
  code: string;
};

const arrayMethods: ArrayMethod[] = [
  {
    name: "Array.push()",
    fruits: [
      { id: "apple", value: "🍎" },
      { id: "cherry", value: "🍒" },
      { id: "grape", value: "🍇" },
      { id: "pineapple", value: "🍍" },
      { id: "orange", value: "🍊" },
      { id: "mango", value: "🥭" },
      { id: "kiwi", value: "🥝" },
    ],
    action: "push",
    explanation:
      "Adds a new element to the end of the array. Returns the new length of the array.",
    code: `
    Syntax: array.push(element)
    Example:
    let fruits = ['🍎', '🍒'];
    fruits.push('🍍');
    // Result: ['🍎', '🍒', '🍍'] `,
  },
  {
    name: "Array.pop()",
    fruits: [
      { id: "apple", value: "🍎" },
      { id: "banana", value: "🍌" },
      { id: "cherry", value: "🍒" },
      { id: "grape", value: "🍇" },
      { id: "pineapple", value: "🍍" },
      { id: "orange", value: "🍊" },
      { id: "mango", value: "🥭" },
      { id: "kiwi", value: "🥝" },
    ],
    action: "pop",
    explanation:
      "Removes the last element from an array and returns it. This method changes the length of the array.",
    code: `
    Syntax: array.pop()
    Example:
    let fruits = ['🍎', '🍌', '🍒'];
    let last = fruits.pop();
    // last = '🍒'
    // Result: ['🍎', '🍌']`,
  },
  {
    name: "Array.shift()",
    fruits: [
      { id: "apple", value: "🍎" },
      { id: "banana", value: "🍌" },
      { id: "cherry", value: "🍒" },
      { id: "grape", value: "🍇" },
      { id: "pineapple", value: "🍍" },
      { id: "orange", value: "🍊" },
      { id: "mango", value: "🥭" },
      { id: "kiwi", value: "🥝" },
    ],
    action: "shift",
    explanation:
      "Removes the first element from an array and returns it. This method changes the length of the array.",
    code: `
    Syntax: array.shift()
    Example:
    let fruits = ['🍎', '🍌', '🍒'];
    let first = fruits.shift();
    // first = '🍎'
    // Result: ['🍌', '🍒']`,
  },
  {
    name: "Array.unshift()",
    fruits: [
      { id: "apple", value: "🍎" },
      { id: "cherry", value: "🍒" },
      { id: "grape", value: "🍇" },
      { id: "pineapple", value: "🍍" },
      { id: "orange", value: "🍊" },
      { id: "mango", value: "🥭" },
      { id: "kiwi", value: "🥝" },
    ],
    action: "unshift",
    explanation:
      "Adds a new element to the beginning of an array. Returns the new length of the array.",
    code: `
    Syntax: array.unshift(element)
    Example:
    let fruits = ['🍒', '🍇'];
    fruits.unshift('🍎');
    // Result: ['🍎', '🍒', '🍇']`,
  },
  {
    name: "Array.slice(0, 3)",
    fruits: [
      { id: "apple", value: "🍎" },
      { id: "banana", value: "🍌" },
      { id: "cherry", value: "🍒" },
      { id: "grape", value: "🍇" },
      { id: "pineapple", value: "🍍" },
      { id: "orange", value: "🍊" },
      { id: "mango", value: "🥭" },
      { id: "kiwi", value: "🥝" },
    ],
    action: "slice",
    explanation:
      "Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.",
    code: `
    Syntax: array.slice(start, end)
    Example:
    let fruits = ['🍎', '🍌', '🍒', '🍇'];
    let sliced = fruits.slice(0, 2);
    // sliced = ['🍎', '🍌']
    // Original: ['🍎', '🍌', '🍒', '🍇']`,
  },
  {
    name: "Array.reverse()",
    fruits: [
      { id: "apple", value: "🍎" },
      { id: "banana", value: "🍌" },
      { id: "cherry", value: "🍒" },
      { id: "grape", value: "🍇" },
      { id: "pineapple", value: "🍍" },
      { id: "orange", value: "🍊" },
      { id: "mango", value: "🥭" },
      { id: "kiwi", value: "🥝" },
    ],
    action: "reverse",
    explanation:
      "Reverses the elements of an array in place. The first array element becomes the last, and the last array element becomes the first.",
    code: `
    Syntax: array.reverse()
    Example:
    let fruits = ['🍎', '🍌', '🍒', '🍇'];
    fruits.reverse();
    // Result: ['🍇', '🍒', '🍌', '🍎']`,
  },
];

export default function Array() {
  return (
    <div className="min-h-screen geist-mono-font font-bold bg-neutral-900 text-zinc-300">
      <h1 className=" flex justify-items-center justify-center items-center text-xl p-14">
        Array Methods
      </h1>
      <div className="container flex-wrap justify-center items-center flex flex-row gap-10 mx-auto p-8">
        {arrayMethods.map((method) => (
          <Card key={method.name} {...method} />
        ))}
      </div>
    </div>
  );
}
