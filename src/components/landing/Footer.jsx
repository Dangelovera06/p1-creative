
import React from "react";
import { MapPin, Phone, Mail, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/737c3d1dd_P1CreativeBlackonWhiteWords.png"
                alt="P1 Creative Logo"
                className="h-8 w-auto brightness-0 invert"
              />
              <div className="border-l border-gray-600 pl-3">
                <div className="text-sm text-gray-400 font-semibold">Content Agency</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Specializing in content creation and advertising for medical practices across Florida. 
              We help healthcare providers build trust, attract patients, and grow their practices.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>Proudly serving medical practices throughout Florida</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Content Creation</li>
              <li>Medical Advertising</li>
              <li>Social Media Management</li>
              <li>SEO Optimization</li>
              <li>Practice Photography</li>
              <li>Performance Analytics</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@flozyagency.io</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Florida, USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm">
              © 2025 P1 Creative. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-white/60 text-sm mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-white/60" />
              <span>for Florida medical practices</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
