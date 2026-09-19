import React from "react";
import {
  Navbar,
  TextInput,
  Button,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar>
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl dark:text-white "
      >
        <span className="px-2 py-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Solomon's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <button className="w-12 h-12 lg:hidden text-gray-400" pill="true">
        <AiOutlineSearch />
      </button>
      <div className="flex gap-2 md:order-2">
        <button
          className="w-12 h-12 hidden sm:inline text-gray-400"
          pill="true"
        >
          <FaMoon />
        </button>
        <Link to="/sign-in">
          <Button className="bg-linear-to-r from-cyan-500 to-blue-500 text-white hover:bg-linear-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800 outline">
            Sign In
          </Button>
        </Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </NavbarLink>
        <NavbarLink active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </NavbarLink>
        <NavbarLink active={path === "/projects"} as={"div"}>
          <Link to="/projects">Project</Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
