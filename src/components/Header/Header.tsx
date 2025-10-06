"use client";

import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    // iwant bulr and sticky
    // Add blur and sticky styles
    <header className="shadow bg-neutral-950  z-10 sticky top-0 backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Logo />

        {/* Center: Navigation */}
        <Navigation />

        {/* Right: Sign Up */}
        <button
          onClick={() => {
            const event = new CustomEvent("open-signup");
            window.dispatchEvent(event);
          }}
          className="hidden md:inline-block btn btn-primary"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}
