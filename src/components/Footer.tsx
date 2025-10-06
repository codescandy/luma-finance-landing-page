"use client";

import Link from "next/link";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-950 text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#how-it-works" className="hover:text-white">How it works</Link></li>
              <li><Link href="#features" className="hover:text-white">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="#blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-white">About</Link></li>
              <li><Link href="#careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="#press" className="hover:text-white">Press</Link></li>
              <li><Link href="#terms" className="hover:text-white">Terms</Link></li>
              <li><Link href="#privacy" className="hover:text-white">Privacy</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#help" className="hover:text-white">Help center</Link></li>
              <li><Link href="#api" className="hover:text-white">API</Link></li>
              <li><Link href="#developers" className="hover:text-white">Developers</Link></li>
              <li><Link href="#status" className="hover:text-white">Status</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="hover:text-white">
                <IconBrandTwitter size={24} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="hover:text-white">
                <IconBrandLinkedin size={24} />
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:text-white">
                <IconBrandInstagram size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex justify-center text-sm">
          <p>© 2025 Luma. Built with privacy-first design. All rights reserved.</p>

        </div>
      </div>    </footer>
  );}
