import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useState } from "react";
import Nav from "./components/Nav";

import styles from "./tailwind.css";
import { navLinks } from "./utils";

export const meta = () => ({
  charset: "utf-8",
  title: "Kihara Electricals",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [
  {
    rel: "stylesheet",
    href: styles
  },
];

export default function App() {
  const [hash, setHash] = useState();
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Work+Sans:wght@400;600;700&display=swap" rel="stylesheet" /> */}

        {/* <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap" rel="stylesheet" /> */}

        <link href="https://fonts.googleapis.com/css2?family=Lora&family=Quattrocento:wght@700&display=swap" rel="stylesheet"></link>
        <Meta />
        <Links />
      </head>
      <body className="bg-[url('/endless-constellation.svg')] bg-center dark:bg-gray-700 dark:bg-blend-overlay">
        {/* TODO: Support dark mode */}
        <header className="flex justify-between items-center md:px-4 2xl:max-w-7xl mx-auto">
          <div className="w-20 h-20">
            <img
              src="/ke-logo.svg"
              alt="Kihara Electricals logo"
              className="maw-x-full h-auto"
            />
          </div>
          <Nav hash={hash} setHash={setHash} />
        </header>
        <Outlet />
        {/* TODO: Keep footer at the bottom always */}
        <footer id="footer" className="bg-gradient-to-r from-[#aa4b6b] via-[#6b6b83] to-[#3b8d99] text-white md:px-8 2xl:max-w-7xl mx-auto lg:h-36  mt-16 lg:mt-24 py-4 font-body">
          <div className="md:flex md:justify-between md:items-center">
            <div className="w-20 h-20 mx-auto md:mx-0">
              <img
                src="/ke-logo.svg"
                alt="Kihara Electricals logo"
                className="maw-x-full h-auto"
              />
            </div>
            <ul className="flex flex-col md:flex-row gap-5 ml-10 sm:ml-0">
              {/* {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    prefetch="intent"
                    end
                    className={({ isActive }) => isActive ? 'underline' : ''}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))} */}
              <li className="hover:text-red-600 transition duration-300 ease-in-out">
                <NavLink
                  to="/"
                  end
                  prefetch="intent"
                  className={({ isActive }) => isActive ? 'text-red-500' : ''}
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-red-600 transition duration-300 ease-in-out">
                <NavLink
                  to="/about"
                  end
                  prefetch="intent"
                  onClick={() => setHash()}
                  className={({ isActive }) => (isActive && hash !== 'contact') ? 'text-red-500' : ''}
                >
                  About
                </NavLink>
              </li>
              <li className="hover:text-red-600 transition duration-300 ease-in-out">
                <NavLink
                  to="/about#contact"
                  end
                  prefetch="intent"
                  onClick={() => setHash('contact')}
                  className={({ isActive }) => (isActive && hash === 'contact') ? 'text-red-500' : ''}
                >
                  Contact
                </NavLink>
              </li>
              <li className="hover:text-red-600 transition duration-300 ease-in-out">
                <NavLink
                  to="/projects"
                  end
                  prefetch="intent"
                  className={({ isActive }) => isActive ? 'text-red-500' : ''}
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
          <span className="flex justify-center my-4">Copyright &copy; {new Date().getFullYear()}</span>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
