import { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../lib/utils";

interface RoundedButtonProps extends HTMLAttributes<HTMLButtonElement> {}
export const RoundedButton = ({
  children,
  className,
  onClick,
}: PropsWithChildren<RoundedButtonProps>) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "border w-full py-4 rounded-md border-green-600 hover:bg-green-500 hover:text-white",
        className
      )}
    >
      {children}
    </button>
  );
};
