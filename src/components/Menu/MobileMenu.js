import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Scrollspy from "react-scrollspy";

const navigation = [
  { name: "Sobre mí", href: "/#about" },
  { name: "Experiencias", href: "/#experiences" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Blog", href: "/blog" },
];

function MobileMenu() {
  return (
    <Popover>
      {({ open }) => (
        <>
          <div className="relative">
            <nav
              className="relative flex items-center justify-between sm:h-10"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link href="/">
                    <a className="text-2xl">
                      <span>Cristina</span>
                      <span className="text-primary">Soler</span>
                    </a>
                  </Link>

                  <div className="-mr-4 flex items-center md:hidden">
                    <Popover.Button className="p-2 inline-flex items-center justify-center text-white">
                      <div className="h-6 w-6" aria-hidden="true">
                        <IconContext.Provider value={{ size: "24px" }}>
                          <FaBars />
                        </IconContext.Provider>
                      </div>
                    </Popover.Button>
                  </div>
                </div>
              </div>

              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <Scrollspy
                  className="space-x-6"
                  items={["about", "experiences", "portfolio", "recent-posts"]}
                  currentClassName="text-primary font-bold"
                >
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="uppercase hover:text-primary"
                    >
                      {item.name}
                    </a>
                  ))}
                </Scrollspy>
              </div>
            </nav>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between border-b border-gray-100">
                  <Link href="/">
                    <a className="text-2xl">
                      <span className="text-dark">Cristina</span>
                      <span className="text-primary">Soler</span>
                    </a>
                  </Link>

                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <div className="h-6 w-6" aria-hidden="true">
                        <IconContext.Provider value={{ size: "22px" }}>
                          <FaTimes />
                        </IconContext.Provider>
                      </div>
                    </Popover.Button>
                  </div>
                </div>

                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default MobileMenu;
