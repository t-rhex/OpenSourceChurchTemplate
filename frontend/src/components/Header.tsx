"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";

const headerConfig = {
  siteName: "Revival",
  logoSrc: "/placeholder.svg?height=32&width=100",
  menuItems: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ],
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {headerConfig.menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-center">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{headerConfig.siteName}</span>
            <Image
              className="h-8 w-auto"
              src={headerConfig.logoSrc}
              alt="Church Logo"
              width={100}
              height={32}
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <form className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <input
              type="text"
              className="h-12 w-full rounded-full border border-gray-300 bg-white pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search..."
            />
          </form>
          <button className="rounded-full bg-gray-100 p-2">
            <Image
              className="h-8 w-8 rounded-full"
              src="/placeholder.svg?height=32&width=32"
              alt="User"
              width={32}
              height={32}
            />
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">{headerConfig.siteName}</span>
                <Image
                  className="h-8 w-auto"
                  src={headerConfig.logoSrc}
                  alt="Church Logo"
                  width={100}
                  height={32}
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {headerConfig.menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <form className="relative mb-4">
                    <Search
                      className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      className="h-12 w-full rounded-full border border-gray-300 bg-white pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Search..."
                    />
                  </form>
                  <button className="flex items-center gap-2">
                    <Image
                      className="h-8 w-8 rounded-full"
                      src="/placeholder.svg?height=32&width=32"
                      alt="User"
                      width={32}
                      height={32}
                    />
                    <span className="text-sm font-semibold text-gray-900">
                      Your Account
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
