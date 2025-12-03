import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "../images/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function CollapsibleExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              width="60"
              height="auto"
              className="h-10 w-auto"
              alt="logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/solution"
              className={({ isActive }) =>
                `text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "text-purple-300" : ""
                }`
              }
            >
              Solution
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "text-purple-300" : ""
                }`
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "text-purple-300" : ""
                }`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "text-purple-300" : ""
                }`
              }
            >
              About
            </NavLink>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="ghost" className="text-white hover:bg-purple-600 hover:text-white">
              <Link to="/signin">Login</Link>
            </Button>
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
              <Link to="/getstarted">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-300 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-purple-900 bg-opacity-95 backdrop-blur-sm rounded-lg mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/solution"
                className={({ isActive }) =>
                  `block text-white hover:text-purple-300 px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? "text-purple-300 bg-purple-800" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Solution
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `block text-white hover:text-purple-300 px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? "text-purple-300 bg-purple-800" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `block text-white hover:text-purple-300 px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? "text-purple-300 bg-purple-800" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block text-white hover:text-purple-300 px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? "text-purple-300 bg-purple-800" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <div className="pt-4 pb-2 border-t border-purple-700">
                <Button asChild variant="ghost" className="w-full text-white hover:bg-purple-800 justify-start" onClick={() => setIsOpen(false)}>
                  <Link to="/signin">Login</Link>
                </Button>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-2" onClick={() => setIsOpen(false)}>
                  <Link to="/getstarted">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default CollapsibleExample;
