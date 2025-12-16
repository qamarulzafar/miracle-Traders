"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";


// Icons
import {
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  ChevronRight,
  Truck,
} from "lucide-react";

interface SocialIcon {
  icon: React.ElementType;
  href: string;
}

export const socialIcons: SocialIcon[] = [
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

const queryTypes = [
  "Order Related Queries",
  "Non-Order Related Issues",
  "Other Issues",
];

const ContactFormSection: React.FC = () => {
  const [selectedQuery, setSelectedQuery] = useState(queryTypes[0]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">

          {/* LEFT SIDEBAR */}
          <div className="w-full lg:w-1/3 p-10 bg-gradient-to-l from-green-700 to-gray-800 text-white">
            <h2 className="text-3xl font-extrabold mb-10 tracking-wide">
              Select Query Type
            </h2>

            <div className="space-y-2">
              {queryTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedQuery === type ? "default" : "ghost"}
                  size="lg"
                  className={`w-full justify-start rounded-xl transition-all ${
                    selectedQuery === type
                      ? "bg-white text-green-600 font-semibold shadow-md"
                      : "text-white hover:bg-white/10"
                  }`}
                  onClick={() => setSelectedQuery(type)}
                >
                  {type}
                </Button>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-white/30">
              <a
                href="/faq"
                className="flex justify-between items-center text-lg hover:text-gray-200 transition"
              >
                Frequently Asked Questions
                <ChevronRight className="w-6 h-6" />
              </a>
            </div>

            <div className="mt-14 flex space-x-5">
              {socialIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="text-white hover:text-gray-200 transition p-2 bg-white/10 rounded-lg"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full lg:w-2/3 p-10 bg-white">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
              Contact Us
            </h2>

            <form className="space-y-8">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input
                    id="firstName"
                    required
                    className="mt-2 rounded-xl focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <Label htmlFor="lastName">Last Name*</Label>
                  <Input
                    id="lastName"
                    required
                    className="mt-2 rounded-xl focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    className="mt-2 rounded-xl focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="mt-2 rounded-xl focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message">Write Your Message*</Label>
                <Textarea
                  id="message"
                  rows={4}
                  required
                  className="mt-2 rounded-xl focus:ring-2 focus:ring-green-500"
                />
              </div>

              <Button
                type="submit"
                className="px-12 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow-lg uppercase"
              >
                Submit Now
              </Button>
            </form>

            {/* Bottom Panel */}
            <div className="pt-8 mt-8 border-t border-gray-200">
              <div className="flex justify-between items-center p-5 bg-gray-50 rounded-xl border shadow-sm">
                <div className="flex items-center space-x-4 text-green-600">
                  <Truck className="w-7 h-7" />
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-gray-800">
                      TRACK, CANCEL, RETURN/EXCHANGE
                    </span>
                    <span className="text-gray-600 text-sm">
                      Manage your purchases easily
                    </span>
                  </div>
                </div>

                <Button className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-semibold shadow-md">
                  Enquire Now !
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
