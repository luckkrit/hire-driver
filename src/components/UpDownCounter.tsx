import React, { HTMLAttributes } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
interface UpDownCounterProps extends HTMLAttributes<HTMLDivElement> {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
export const UpDownCounter = ({ count, setCount }: UpDownCounterProps) => {
  return (
    <div className="flex w-full justify-center items-center py-6">
      <button
        className="flex justify-center text-3xl text-green-700"
        onClick={() => setCount((o) => (o === 1 ? 1 : o - 1))}
      >
        <FaMinus />
      </button>
      <input
        type="text"
        className="outline-none border-0 text-3xl text-green-700 w-28 text-center"
        value={count}
        readOnly
      />
      <button
        className="flex justify-center text-3xl text-green-700"
        onClick={() => setCount((o) => o + 1)}
      >
        <FaPlus />
      </button>
    </div>
  );
};
