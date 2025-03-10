"use client"; // Required for client-side rendering in Next.js

import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import Image from "next/image";

export default function AboutTheGame() {
  return (
    <div className="bg-[#FAEBD7] pt-2">
      <Header />
      <div className="grid grid-rows items-center justify-items-center min-h-screen font-mono  gap-16  bg-[#FAEBD7] text-black  p-5">
        <Image
          className="w-4/5 shadow-2xl rounded-2xl"
          src="/logo_BTE.jpg"
          alt="Next.js logo"
          width={600}
          height={600}
        />
        <p className="text-center text-2xl pt-5">
          Embark on a journey through the mesmerizing universe of Back To EPITA,
          <br /> where every twist and turn unveils a new story waiting to be
          told.
        </p>{" "}
      </div>
      <hr className="border border-black w-3/5 mx-auto my-7" />

      <div className="flex flex-col font-mono gap-5 px-58 text-black">
        <h2 className="text-2xl font-semibold">The Story Behind the Game</h2>
        <p className="text-black mt-2">
          ”Back to EPITA” is an innovative game that aims to offer an immersive
          and collaborative experience. This idea emerged after a long period of
          reflection during which we considered several game mechanics. Our game
          is exclusively made for two players, with many puzzles and where mutul
          assistance is the core of our game: the two playersecannot progress
          without the help of their partner.
          <br />
          <br />
          In the game, the two characters, will dive into a universe where they
          travel through different eras, confronted by enigmas and puzzles to
          progress. In the start of their adventure, they will appear in the
          workshop of EPITA Lyon. Here, they will disvover a mysterious object
          that they will try to activate, starting a trip in time. In these
          levels, the players will have to collaborate efficiently to overcome
          the tasks that will come. `a eux.
        </p>
      </div>

      <hr className="border border-black w-3/5 mx-auto my-7" />

      <div className="flex flex-col items-center my-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          Download our most recent report
        </h2>
        <a href="/files/rapport2.pdf" download="rapport2">
          <Button>Download Report</Button>
        </a>
      </div>

      <Footer />
    </div>
  );
}
