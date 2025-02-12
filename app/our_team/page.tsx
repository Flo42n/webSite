"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function our_team() {
  return (
    <div className="bg-[#FAEBD7] pt-2">
      <Header />
      <div className="grid grid-rows items-center justify-items-center min-h-screen font-mono  gap-10  bg-[#FAEBD7] text-black  p-5">
        <Image 
          src="/joynestLogo.jpg" 
          alt="Our Team Image" 
          width={600} 
          height={600} 
          className="rounded-lg shadow-lg" 
        />
        <p className="text-center text-2xl pt-1">
          Discover the talented individuals who bring
          <br /> creativity and passion to our captivating world.
        </p>
      </div>
      <Footer />
    </div>
  );
}
