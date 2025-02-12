"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function our_team() {
  return (
    <div className="bg-[#FAEBD7] pt-2">
      <Header />
      <div className="grid grid-rows items-center justify-items-center font-mono  gap-5  bg-[#FAEBD7] text-black  p-5">
        <Image
          src="/joynestLogo.png"
          alt="Our Team Image"
          width={200}
          height={200}
          className=" w-2/3 m-16 "
        />
        <p className="text-center text-2xl">
          Discover the talented individuals who bring
          <br /> creativity and passion to our captivating world.
        </p>
      </div>
      <Footer />
    </div>
  );
}
