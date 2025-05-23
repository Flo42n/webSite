"use client";

import Image from "next/image";
import { Button, ButtonIcon } from "./components/Button";
import { BlockDefillant } from "./components/BlochDefillant";
import TextRotator from "./components/TextRotator";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { redirect } from "next/navigation";
import Head from "next/head";


export default function Home() {
  return (
  <>
      <Head>
        <title>Back Two EPITA – Home</title>
        <meta name="description" content="Back Two EPITA: A co-op puzzle adventure through time." />
      </Head>
      <div className="bg-[#d5bea1] pt-2">
        <Header />
        <div className="grid grid-rows items-center justify-items-center min-h-screen  gap-16  bg-[#d5bea1] text-black  p-5">
            <p className="text-center text-3xl font-semibold -mb-4 ">
              Welcome to ...
            </p>
            <Image
              className="w-4/5 shadow-2xl rounded-2xl"
              src="/BTElogo.jpeg"
              alt="Next.js logo"
              width={600}
              height={600}
            />
            <p className="text-center text-2xl pt-5">
              Dive into a world of mystery and adventure with Back To EPITA,
              <br /> where every riddle reveals the story and every step can't be
              made alone.
            </p>
            <Button onClick={() => redirect("/about_the_game")}>
              Start your adventure
            </Button>

            <div>
              <div className="container mx-auto py-10 w-screen font-sans -mb-4">
                <div className="overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#FAEBD7] to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#FAEBD7] to-transparent z-10 pointer-events-none"></div>
                  <div className="scrolling-wrapper flex space-x-6 absolute">
                    <BlockDefillant nom="Arthur" role="Game Developer" className="">
                      "Back Two EPITA offers an immersive experience that keeps you
                      on the edge of your seat.""
                    </BlockDefillant>

                    <BlockDefillant nom="Aliya" role="Gameplay Leader">
                      "The gameplay mechanics in Back Two EPITA are innovative and
                      engaging, providing a unique experience for every player."
                    </BlockDefillant>
                    <BlockDefillant
                      nom="Ponnareay"
                      role="Audio and Graphics Leader"
                    >
                      "The audiovisual elements of Back Two EPITA create an
                      immersive atmosphere that truly brings the game world to
                      life."
                    </BlockDefillant>
                    <BlockDefillant nom="Floralie" role="Game developer">
                      "Crafted with passion, this game is a masterpiece of
                      storytelling and gameplay."
                    </BlockDefillant>
                    <BlockDefillant nom="Oceane" role="Project Manager">
                      "Our team has poured their hearts into creating an
                      unforgettable experience for players."
                    </BlockDefillant>
                    <BlockDefillant nom="Arthur" role="Game Developer">
                      "Back Two EPITA offers an immersive experience that keeps you
                      on the edge of your seat.""
                    </BlockDefillant>

                    <BlockDefillant nom="Aliya" role="Gameplay Leader">
                      "The gameplay mechanics in Back Two EPITA are innovative and
                      engaging, providing a unique experience for every player."
                    </BlockDefillant>
                    <BlockDefillant
                      nom="Ponnareay"
                      role="Audio and Graphics Leader"
                    >
                      "The audiovisual elements of Back Two EPITA create an
                      immersive atmosphere that truly brings the game world to
                      life."
                    </BlockDefillant>
                    <BlockDefillant nom="Floralie" role="Game developer">
                      "Crafted with passion, this game is a masterpiece of
                      storytelling and gameplay."
                    </BlockDefillant>
                    <BlockDefillant nom="Oceane" role="Project Manager">
                      "Our team has poured their hearts into creating an
                      unforgettable experience for players."
                    </BlockDefillant>
                  </div>
                </div>
              </div>

              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }

                .scrolling-wrapper {
                  animation: scroll 30s linear infinite;
                  display: flex;
                  width: 300%; /* Ensure smooth wrapping */
                }

                .overflow-hidden {
                  width: 100%;
                  height: 15rem; /* Adjust to fit the text zones */
                  position: relative;
                }
              `}</style>
            </div>

            <hr className="border border-black w-3/5" />
            <div className="flex flex-col gap-6 px-52 ">
              <p className="text-2xl font-bold ">Made by five talented conceptors</p>
              <p
                className="text-4xl font-extrabold tracking-wide"
                style={{
                  background:
                    "linear-gradient(135deg, #B88A44 0%, #FFD699 40%, #8B5C1E 60%, #B88A44 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Meet our team !
              </p>
              <p className="text-lg">
                JoyNest Studios, founded in 2022 by a group of recent graduates, has
                established itself as a unique force within the gaming industry. The
                team of five shared a passion for creating relaxing, family-friendly
                games.
                <br />
                <br />
                JoyNest Studios is known for its narrative-driven 2D games that
                emphasize a warm and soothing atmosphere. They are most associated
                with puzzle-platformers and they are particularly appreciated for
                their unique and fun puzzle designs, as well as their delicate
                visuals and melodious and soothing soundtracks.
                <br />
                <br />
                Come see the creators of Joynest Studio by clicking on the button
                below!
              </p>
              <br />
              <ButtonIcon onClick={() => redirect("/our_team")}>
                Explore more
              </ButtonIcon>
            </div>
            <hr className="border border-black w-3/5" />
            <TextRotator
              texts={[
                "Explore new timelines",
                "Strategize and Conquer",
                "Communication is key",
              ]}
              titles={[
                "Venture into diverse periods, each with its own secrets and challenges.",
                "Formulate plans and strategies to solve puzzles and riddles.",
                "Teamwork makes the dreamwork! Work with your partner to progress further in the game!",
              ]}
            />
            <div />
          </div>

          <Footer />
        </div>
       </>
      );
    }
