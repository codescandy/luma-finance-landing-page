"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { menuItems } from "./MenuData";
import {
  IconMenu2,
  IconX,

} from "@tabler/icons-react";
import Modal from "../Modal";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
   // ✨ Smooth scroll handler
  const handleScroll = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);

    }
  };


  // ✅ Handle desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 991) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Outside click handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);

      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Listen to header signup button
  useEffect(() => {
    function handleOpenSignup() {
      setIsModalOpen(true);
    }
    window.addEventListener("open-signup", handleOpenSignup);
    return () => window.removeEventListener("open-signup", handleOpenSignup);
  }, []);

  return (
    <div ref={navRef} className="flex items-center">
      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center space-x-6 text-neutral-300">
        {menuItems.map((item) =>
        // remove dropdown please
           <li key={item.label}>
              <motion.button


                onClick={() => handleScroll(item.href)}
                className="hover:text-lime-500 transition-colors cursor-pointer bg-transparent border-none outline-none active:text-lime-500"
              >
                {item.label}
              </motion.button>
            </li>

        )}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden ml-4"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <IconX size={28} className="text-white" />
        ) : (
          <IconMenu2 size={28} className="text-white" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-neutral-950 shadow-lg z-10 h-[600px] p-4">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="text-xl font-bold text-lime-400">
              Luma
            </Link>
            <button
              className="text-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <IconX size={28} className="text-white" />
            </button>
          </div>

          <ul className="space-y-4 text-neutral-300">
            {menuItems.map((item) =>
           (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-2 py-2 hover:bg-neutral-100 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
            <li>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Signup Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>
      </Modal>
    </div>
  );
}
