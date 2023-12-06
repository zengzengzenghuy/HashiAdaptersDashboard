import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function TypeFilters(props) {
  const [selectedType, setSelectedType] = useState(null);
  useEffect(() => {
    if (props.isReset === true) {
      setSelectedType(null);
    }
  }, [props.isReset]);
  return (
    <div className="self-center px-2">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-[#1d2429] px-4 py-2 text-sm font-medium text-white hover:bg-[#205239] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            {selectedType == null ? props.name : selectedType}
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-violet-600 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item
                onClick={() => {
                  console.log('Block Header');
                }}
              >
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-900 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => {
                      props.onFilterChange('Block Header');
                      setSelectedType('Block Header');
                    }}
                  >
                    Block Header
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-900 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => {
                      props.onFilterChange('Message relay');
                      setSelectedType('Message Relay');
                    }}
                  >
                    Message Relay
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
