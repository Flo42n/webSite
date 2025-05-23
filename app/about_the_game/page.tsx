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
      </div>

      <hr className="border border-black w-3/5 mx-auto my-7" />

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
          "Back Two EPITA" is an innovative cooperative game designed to deliver a deeply immersive 
          and collaborative experience. Born from extensive brainstorming and the exploration of diverse 
          gameplay mechanics, the concept centers on teamwork and interdependence. 
          It is exclusively built for two players, emphasizing mutual assistance as the heart of the gameplay.
          Progression in the game is impossible without strong communication and 
          ooperation between partners, as each puzzle is carefully crafted to require synchronized efforts.
          <br />
          <br />
          The adventure begins in the familiar yet mysterious surroundings of the EPITA Lyon workshop. 
          Here, the players characters stumble upon an enigmatic object buried beneath dust and time. 
          When activated, this device triggers a time-traveling journey that propels the players through 
          a series of richly detailed historical eras. Each level offers a unique atmosphere, challenges, 
          and logic-based puzzles that can only be solved through shared insight and collaboration.
          <br />
          <br />
          In the first level, the players are transported to Ancient Egypt, where they find 
          themselves in a forgotten temple buried beneath the golden sands. Surrounded by hieroglyphs, 
          shifting stones, and ancient machinery, they must decipher symbolic clues, activate ancient 
          mechanisms, and navigate hidden passages. Each player will possess different pieces of vital 
          information or access to different parts of the temple, reinforcing the need for continuous 
          cooperation. The mysteries of the pharaohs lie in wait, and only together can the players 
          unlock the secrets of this ancient civilization.
          <br />
          <br />
          The second level transports the duo to a medieval castle, where they are immersed in a world of 
          kings, knights, and mystical lore. The players must solve a series of interconnected enigmas 
          involving enchanted scrolls, mechanical locks, and secret codes hidden within the stone walls of 
          the fortress. As they navigate through dungeons, libraries, and tower chambers, they'll encounter 
          riddles that require precise timing and strategic coordination. The castle itself becomes a puzzle, 
          and only through joint effort will they find the key to progressing through time.
          <br />
          <br />
          With "Back Two EPITA," every level introduces new mechanics and thematic challenges, 
          keeping the players engaged while reinforcing the power of teamwork. This game is not just about 
          solving puzzles—it's about building trust, developing communication, and experiencing the thrill of 
          discovery together.
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
