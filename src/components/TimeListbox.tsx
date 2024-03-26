import { Listbox } from "@headlessui/react";
import React, { useState } from "react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";

const minutes = Array.from({ length: 60 }, (_, i) =>
  i.toString().padStart(2, "0")
);
const hours = Array.from({ length: 24 }, (_, i) =>
  i.toString().padStart(2, "0")
);

interface TextListboxProps {
  data: string[];
}
const TextListbox = ({ data }: TextListboxProps) => {
  const [selected, setSelected] = useState(data[0]);
  return (
    <div className="w-24">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-green-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm">
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {data.map((value, i) => (
              <Listbox.Option
                key={i}
                value={value}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-green-100 text-green-900" : "text-gray-900"
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {value}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export const TimeListbox = () => {
  return (
    <div className="flex items-center gap-1 bg-green-600 p-2 rounded-md">
      <div className="text-white px-2">ระบุเวลาเริ่มงาน</div>
      <TextListbox data={hours} />
      <TextListbox data={minutes} />
    </div>
  );
};
