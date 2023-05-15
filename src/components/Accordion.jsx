import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function Example() {
  return (
    <div className="max-w-sm mx-auto w-full border border-gray-300 rounded-2xl pt-2">
      <div className="mx-auto max-w-md w-full text-black/70 rounded-2xl pb-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 text-left text-lg font-medium">
                <span>Teams</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-7 w-7`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-3 text-base">
                <Link href="/teams">Lorem</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-3 text-base">
                <Link href="/condidates">Ipsum</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-3 text-base">
                <Link href="/">Dolor</Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
