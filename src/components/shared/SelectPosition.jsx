import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';

const people = [
  { name: 'Select Positon' },
  { name: 'CEO' },
  { name: 'Frontend Develper' },
  { name: 'Sales Manager' },
  { name: 'Backend Developer' },
];

export default function Example() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-2xl bg-white py-3 lg:py-6 px-6 lg:px-9 text-left lg:text-xl mb-4 lg:mb-7">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center pr-2">
              <svg
                width="16"
                height="12"
                viewBox="0 0 24 16"   
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6035 14.792L23.3632 4.40381C24.8352 2.65781 23.5874 0 21.2954 0H2.70358C0.411579 0 -0.836292 2.65981 0.635708 4.40381L9.39547 14.792C10.7535 16.402 13.2455 16.402 14.6035 14.792Z"
                  fill="#FF6952"
                />
              </svg>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full overflow-auto rounded-md bg-white py-1 lg:text-xl shadow-lg  ring-opacity-5 focus:outline-none top-20">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
