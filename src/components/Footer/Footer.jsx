
"use client";

import React from "react";
import VisitorCounter from "@/components/VisitorCounter";

const Footer = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container">
        <div
          className="bg-gradient-to-r from-primary/50 to-primary/20
          text-white py-12 border-2 border-primary rounded-2xl px-4
          hover:red-shadow flex flex-col lg:flex-row gap-8
          justify-around items-center duration-300"
        >
          <div className="flex flex-col justify-center items-center space-y-3">
            <h2 className="text-3xl font-bold">
              Connect & Collaborate
            </h2>

            <p>Contact dy911848@gmail.com</p>

            <p>Copyright © 2026</p>

            <p className="mb-2">
              Last Updated: <strong>16 June 2026</strong>
            </p>

            <div className="pt-2">
              <VisitorCounter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
