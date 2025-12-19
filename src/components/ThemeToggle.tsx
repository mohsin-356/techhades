"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("alienmatrix.theme") || "dark";
    setTheme(savedTheme as "dark" | "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("alienmatrix.theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
  };

  if (!mounted) {
    return <div className="w-[70px] h-[35px]" />; // Placeholder to prevent layout shift
  }

  return (
    <motion.div
      className="theme-toggle-wrapper"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <input
        type="checkbox"
        id="theme-toggle-checkbox"
        className="theme-toggle-checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-toggle-checkbox" className="theme-toggle">
        <span className="toggle-button">
          <span className="crater crater-1"></span>
          <span className="crater crater-2"></span>
          <span className="crater crater-3"></span>
          <span className="crater crater-4"></span>
          <span className="crater crater-5"></span>
          <span className="crater crater-6"></span>
          <span className="crater crater-7"></span>
        </span>
        <span className="star star-1"></span>
        <span className="star star-2"></span>
        <span className="star star-3"></span>
        <span className="star star-4"></span>
        <span className="star star-5"></span>
        <span className="star star-6"></span>
        <span className="star star-7"></span>
        <span className="star star-8"></span>
      </label>

      <style jsx>{`
        .theme-toggle-wrapper {
          position: relative;
          display: inline-block;
        }

        .theme-toggle-checkbox {
          opacity: 0;
          position: absolute;
          height: 0;
          width: 0;
        }

        .theme-toggle {
          position: relative;
          cursor: pointer;
          display: inline-block;
          width: 70px;
          height: 35px;
          background: #211042;
          border-radius: 17.5px;
          transition: background 500ms;
          overflow: hidden;
        }

        .toggle-button {
          position: absolute;
          display: inline-block;
          top: 2.5px;
          left: 2px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #faeaf1;
          overflow: hidden;
          box-shadow: 0 0 12px 1.5px rgba(255, 255, 255, 0.6);
          transition: all 500ms ease-out;
        }

        .crater {
          position: absolute;
          display: inline-block;
          background: #faeaf1;
          border-radius: 50%;
          transition: transform 500ms;
        }

        .crater-1 {
          background: #fffff9;
          width: 30px;
          height: 30px;
          left: 3.5px;
          bottom: 3.5px;
        }

        .crater-2 {
          width: 7px;
          height: 7px;
          top: -2.5px;
          left: 15px;
        }

        .crater-3 {
          width: 5.5px;
          height: 5.5px;
          top: 7px;
          right: -1.5px;
        }

        .crater-4 {
          width: 3.5px;
          height: 3.5px;
          top: 8.5px;
          left: 10.5px;
        }

        .crater-5 {
          width: 5px;
          height: 5px;
          top: 14px;
          left: 17px;
        }

        .crater-6 {
          width: 3.5px;
          height: 3.5px;
          top: 17px;
          left: 7px;
        }

        .crater-7 {
          width: 4px;
          height: 4px;
          bottom: 2px;
          left: 12px;
        }

        .star {
          position: absolute;
          display: inline-block;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0.5px 0 1px 1px rgba(255, 255, 255, 0.8);
        }

        .star-1 {
          width: 2px;
          height: 2px;
          right: 32px;
          bottom: 14px;
        }

        .star-2 {
          width: 3px;
          height: 3px;
          right: 25px;
          top: 3.5px;
        }

        .star-3 {
          width: 1.8px;
          height: 1.8px;
          right: 21px;
          bottom: 5px;
        }

        .star-4 {
          width: 1px;
          height: 1px;
          right: 14px;
          bottom: 17.5px;
        }

        .star-5 {
          width: 1.5px;
          height: 1.5px;
          right: 3.5px;
          bottom: 12px;
        }

        .star-6,
        .star-7,
        .star-8 {
          width: 3.5px;
          height: 0.7px;
          border-radius: 0.7px;
          transform: rotate(-45deg);
          box-shadow: 1.8px 0px 1.5px 0.3px #fff;
          animation: travel 1.5s ease-out infinite;
        }

        .star-6 {
          right: 10.5px;
          bottom: 10.5px;
          animation-delay: -2s;
        }

        .star-7 {
          right: 17.5px;
          bottom: 21px;
        }

        .star-8 {
          right: 32px;
          top: 3.5px;
          animation-delay: -4s;
        }

        @keyframes travel {
          0% {
            transform: rotate(-45deg) translateX(25px);
          }
          50% {
            transform: rotate(-45deg) translateX(-7px);
            box-shadow: 1.8px 0px 2px 0.3px #fff;
          }
          100% {
            transform: rotate(-45deg) translateX(-10px);
            width: 0.7px;
            height: 0.7px;
            opacity: 0;
            box-shadow: none;
          }
        }

        .theme-toggle-checkbox:checked + .theme-toggle {
          background: #24d7f7;
        }

        .theme-toggle-checkbox:checked + .theme-toggle .toggle-button {
          background: #f7ffff;
          transform: translateX(36px);
          box-shadow: 0 0 12px 1.8px rgba(255, 255, 255, 0.8);
        }

        .theme-toggle-checkbox:checked + .theme-toggle .toggle-button .crater {
          transform: rotate(-45deg) translateX(25px);
        }

        .theme-toggle-checkbox:checked + .theme-toggle .star {
          animation: move 2s infinite;
          transform: none;
          box-shadow: none;
        }

        .theme-toggle-checkbox:checked + .theme-toggle .star-1 {
          width: 14px;
          height: 3.5px;
          border-radius: 3.5px;
          background: #fff;
          left: 7px;
          top: 8.8px;
          box-shadow: none;
        }

        .theme-toggle-checkbox:checked + .theme-toggle .star-2 {
          width: 4.2px;
          height: 4.2px;
          background: #fff;
          left: 9px;
          top: 8px;
          box-shadow: -0.3px 0 0.7px 0 rgba(0, 0, 0, 0.1);
        }

        .theme-toggle-checkbox:checked + .theme-toggle .star-3 {
          width: 5.6px;
          height: 5.6px;
          background: #fff;
          left: 12.3px;
          top: 6.7px;
          box-shadow: -0.3px 0 0.7px 0 rgba(0, 0, 0, 0.1);
        }

        .theme-toggle-checkbox:checked + .theme-toggle .star-4 {
          width: 4.9px;
          height: 4.9px;
          background: #fff;
          left: 16px;
          top: 7.4px;
          box-shadow: -0.3px 0 0.7px 0 rgba(0, 0, 0, 0.1);
        }

        .theme-toggle-checkbox:checked + .theme-toggle .star-5 {
          width: 21px;
          height: 5.3px;
          border-radius: 5.3px;
          background: #fff;
          left: 10.5px;
          bottom: 7px;
          box-shadow: none;
        }

        .theme-toggle-checkbox:checked + .theme-toggle .star-6 {
          width: 6.3px;
          height: 6.3px;
          background: #fff;
          border-radius: 50%;
          left: 13.3px;
          bottom: 7px;
          box-shadow: -0.3px 0 0.7px 0 rgba(0, 0, 0, 0.1);
        }

        .theme-toggle-checkbox:checked + .theme-toggle .star-7 {
          width: 8.4px;
          height: 8.4px;
          background: #fff;
          border-radius: 50%;
          left: 18.2px;
          bottom: 7px;
          box-shadow: -0.3px 0 0.7px 0 rgba(0, 0, 0, 0.1);
        }

        .theme-toggle-checkbox:checked + .theme-toggle .star-8 {
          width: 7.4px;
          height: 7.4px;
          background: #fff;
          border-radius: 50%;
          left: 24.5px;
          top: 20.7px;
          box-shadow: -0.3px 0 0.7px 0 rgba(0, 0, 0, 0.1);
        }

        @keyframes move {
          0% {
            transform: none;
          }
          25% {
            transform: translateX(1px);
          }
          100% {
            transform: translateX(-1px);
          }
        }
      `}</style>
    </motion.div>
  );
}
