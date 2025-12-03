import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, HelpCircle, FileText, Shield } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* Gradient Background */}
      <div className="h-32 bg-gradient-to-r from-pink-500/50 via-cyan-500/50 via-purple-500/50 to-purple-500/50"></div>
      
      <footer className="bg-gray-900 text-white">
        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-white rounded-2xl p-8 md:p-12 text-left shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Try it for free right now!
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl">
              Test the quality of our program and let yourself be convinced by
              the effectiveness of our AI. Start right now to generate quality
              content!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 border border-gray-300">
                <Link to="#" className="flex items-center gap-2">
                  <Mail size={20} />
                  SIGN UP WITH EMAIL
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="https://accounts.google.com/signup" target="_blank" rel="noopener noreferrer">
                  SIGN UP WITH GOOGLE
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Clients */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">CLIENTS</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/signin" className="text-gray-300 hover:text-white transition-colors">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="text-gray-300 hover:text-white transition-colors">
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">SOCIAL MEDIA</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="https://twitter.com" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Twitter size={16} />
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/in/arham-ali-973359289/" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Linkedin size={16} />
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link to="https://github.com/arham-ali1323" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Github size={16} />
                    Github
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">LEGAL INFO</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <FileText size={16} />
                    Legal information
                  </Link>
                </li>
                <li>
                  <Link to="https://www.example.com/terms-and-conditions.com" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <FileText size={16} />
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="https://www.example.com/privacy-policy.com" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Shield size={16} />
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">SUPPORT</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <HelpCircle size={16} />
                    Helpdesk
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-gray-400">
              &copy; T22 All right reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
