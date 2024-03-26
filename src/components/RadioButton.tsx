import React, { PropsWithChildren, useId } from "react";
interface RadioButtonProps {
  name: string;
  value: string;
  checked?: boolean;
}
export const RadioButton = ({
  name,
  value,
  checked,
  children,
}: PropsWithChildren<RadioButtonProps>) => {
  const id = useId();
  return (
    <div className="flex items-center mb-4">
      <input
        id={`country-option-${id}`}
        type="radio"
        name={name}
        value={value}
        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-green-300 text-green-600"
        checked={checked}
        onChange={() => {}}
      />
      <label
        htmlFor={`country-option-${id}`}
        className="block ms-2  text-sm font-medium text-gray-900 "
      >
        {children}
      </label>
    </div>
  );
};
