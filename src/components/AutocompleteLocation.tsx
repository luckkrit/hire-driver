import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import thai_provinces from "../assets/thai_provinces.json";
import thai_amphures from "../assets/thai_amphures.json";
import { useDebounce } from "../lib/utils";

const getProvinces = () => {
  return thai_provinces.map((province) => ({
    id: province.id,
    name_th: province.name_th + ", ประเทศไทย",
  }));
};

const getAmphuresProvinces = () => {
  return thai_amphures
    .map((amphur) => {
      const province = thai_provinces.find((p) => p.id === amphur.province_id);
      if (province !== undefined) {
        return {
          id: amphur.id,
          name_th: amphur.name_th + ", " + province.name_th + ", ประเทศไทย",
        };
      }
    })
    .filter((o) => o !== undefined);
};

interface Location {
  id: number;
  name_th: string;
}

const provinces = getProvinces();
const amphures = getAmphuresProvinces();
export const AutocompleteLocation = () => {
  const [selected, setSelected] = useState<Location | null>(null);
  const [query, setQuery] = useState("");
  const debounce = useDebounce((event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }, 500);
  const filteredProvinces =
    query === ""
      ? provinces
      : provinces.filter((location) =>
          location.name_th
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  const filteredAmphures =
    query === ""
      ? amphures
      : amphures.filter((location) =>
          location.name_th
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <div className="relative w-full cursor-default overflow-hidden rounded-md bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm">
          <Combobox.Input
            className="w-full rounded-md border border-green-300 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 focus-visible:ring-offset-green-300 ring-green-300 focus:ring-green-300 focus:border-green-300"
            displayValue={(location: Location) =>
              location !== null ? location.name_th : ""
            }
            onChange={(event) => debounce(event)}
            placeholder="พิมพ์เพื่อค้นหา"
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute z-[9999] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {query.length > 0 &&
              (filteredProvinces.length > 0 || filteredAmphures.length > 0) && (
                <>
                  {filteredProvinces.length > 0 && (
                    <div className="relative cursor-default select-none py-2 pl-10 pr-4 bg-stone-200 text-gray-400">
                      จังหวัด
                    </div>
                  )}
                  {filteredProvinces.map((location) => (
                    <Combobox.Option
                      key={location.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-green-600 text-white" : "text-gray-900"
                        }`
                      }
                      value={location}
                    >
                      {location.name_th}
                    </Combobox.Option>
                  ))}
                  {filteredAmphures.length > 0 && (
                    <div className="relative cursor-default select-none py-2 pl-10 pr-4 bg-stone-200 text-gray-400">
                      อำเภอ / เขต
                    </div>
                  )}
                  {filteredAmphures.map((location) => (
                    <Combobox.Option
                      key={location.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-green-600 text-white" : "text-gray-900"
                        }`
                      }
                      value={location}
                    >
                      {location.name_th}
                    </Combobox.Option>
                  ))}
                </>
              )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};
