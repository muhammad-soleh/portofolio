import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import Image from "next/image";
import instaIcon from "../../public/images/icons/instagram.webp";
import gmailIcon from "../../public/images/icons/gmail.png";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark bg-light`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleCick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:p-8">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleCick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-transalte-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      {/* Dekstop */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink title="Home" href="/" className="mr-4" />
          <CustomLink title="About" href="/about" className="mx-4" />
          <CustomLink title="Projects" href="/projects" className="mx-4" />
          {/* <CustomLink title="Articles" href="/articles" className="ml-4" /> */}
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/muhammad-soleh"
            target="_blank"
            whileHover={{ y: -2, scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://instagram.com/msolehh_12"
            target="_blank"
            whileHover={{ y: -2, scale: 0.9 }}
            className="w-6 mx-3"
          >
            <Image src={instaIcon} alt="Insta Icon" />
          </motion.a>
          <motion.a
            href="mailto:msolehh.work@gmail.com"
            target="_blank"
            whileHover={{ y: -2, scale: 0.9 }}
            className="w-6 mx-3 bg-light rounded-full"
          >
            <Image src={gmailIcon} alt="gmail icon" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/muhammad-soleh/"
            target="_blank"
            whileHover={{ y: -2, scale: 0.9 }}
            className="w-6 mx-3 bg-light rounded-full"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col  justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink toggle={handleCick} title="Home" href="/" />
            <CustomMobileLink toggle={handleCick} title="About" href="/about" />
            <CustomMobileLink
              toggle={handleCick}
              title="Projects"
              href="/projects"
            />
            {/* <CustomMobileLink
              toggle={handleCick}
              title="Articles"
              href="/articles"
            /> */}
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://twitter.com"
              target="_blank"
              whileHover={{ y: -2, scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              whileHover={{ y: -2, scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <Image src={instaIcon} alt="insta icon" />
            </motion.a>
            <motion.a
              href="mailto:msolehh.work@gmail.com"
              target="_blank"
              whileHover={{ y: -2, scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full sm:mx-1"
            >
              <Image src={gmailIcon} alt="gmail icon" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-soleh/"
              target="_blank"
              whileHover={{ y: -2, scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>

            <button
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
              }}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
