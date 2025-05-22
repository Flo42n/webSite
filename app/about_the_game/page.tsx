"use client"; // Required for client-side rendering in Next.js

import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import Image from "next/image";

export default function AboutTheGame() {
  return (
    <div className="bg-[#d5bea1] pt-2">
      <Header />
      <div className="grid grid-rows items-center justify-items-center min-h-screen gap-16  bg-[#d5bea1] text-black  p-5">
        <Image
          className="w-4/5 shadow-2xl rounded-2xl"
          src="/BTElogo.jpeg"
          alt="Next.js logo"
          width={600}
          height={600}
        />
        <p className="text-center text-2xl pt-5">
          Embark on a journey through the mesmerizing universe of Back Two EPITA,
          <br /> where every twist and turn unveils a new story waiting to be
          told.
        </p>

        <hr className="border border-black w-3/5 mx-auto my-7" />

      </div>

      <div className="flex flex-col items-center my-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          Want to play?
        </h2>
        <a href="https://github.com/Alow01/BackTwoEpita/releases/tag/v1">
          <Button>Download our game!</Button>
        </a>

      </div>
      <hr className="border border-black w-3/5 mx-auto my-7" />

      <div className="flex flex-col gap-5 px-68 text-black">
        <h2 className="text-2xl font-semibold">The Game</h2>
        <p className="text-xl mt-2">
          ”Back two EPITA” is an innovative game that aims to offer an immersive
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
          the tasks that will come.
        </p>
      </div>

      <hr className="border border-black w-3/5 mx-auto my-7" />

      <div className="flex flex-col items-center my-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          How do I play the game?
        </h2>
        <a href="/files/rapport2.pdf" download="manueldinstallation">
          <Button>Installation guide</Button>
        </a>
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
