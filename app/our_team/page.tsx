"use client";

import Image from "next/image";
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card, CardContent } from "../components/Card";
import Head from "next/head";

const teamMembers = [
  {
    name: "Océane Delogé",
    role: "Project Manager",
    image: "/Oceane.png",
    description:
      "Born in Kenya, Océane grew up developing a love for video games. Her passion for IT started in her early school years and she pursued her career as a computer engineer at EPITA.  ",
  },
  {
    name: "Aliya Aparicio",
    role: "Gameplay Leader",
    image: "/Aliya.png",
    description:
      "Originating from Clermont-Ferrand, France, Aliya has always been fascinated by numerical interfaces. At EPITA, she quickly blossomed in this sector by perfecting her competences in programmaing and game design. ",
  },
  {
    name: "Floralie Niort",
    role: "Game Developer",
    image: "/Flo.png",
    description:
      "Born in the south of France, Floralie has been brought up in the universe of video games from a very young age. At EPITA, she acquired solid foundations, as she got familiar with multiple programming languages.",
  },
  {
    name: "Arthur Brune",
    role: "Game Developer",
    image: "/Arthur.png",
    description:
      "Originating from Ain, France, Arthur is an expert in programming and has a passion for creating solid infrastructures. He also has previous experience for developing mobile games.",
  },
  {
    name: "Ponnareay Rith",
    role: "Audio and Graphics Leader",
    image: "/Ponnareay.png",
    description:
      "Born in Cambodia, very early, Ponnareay discovered a passion for video games. His first iPad developed his love for gaming and technology in general. He explored this passion throughout his middle school and high school years, and finally at EPITA.",
  },
];

export default function OurTeam() {
  return (
    <>
        <Head>
          <title>Back Two EPITA – About</title>
          <meta name="description" content="Back Two EPITA: A co-op puzzle adventure through time." />
        </Head>
        <div className="bg-[#d5bea1] pt-2">
          <Header />
          <div className="grid grid-rows items-center justify-items-center  gap-5 bg-[#d5bea1] text-black p-5">
            <Image
              src="/joynestLogo.png"
              alt="Our Team Image"
              width={200}
              height={200}
              className="w-2/3 m-16"
            />
            <p className="text-center text-2xl">
              Discover the talented individuals who bring
              <br /> creativity and passion to our captivating world.
            </p>
          </div>
          <section className="max-w-6xl mx-auto p-8">
            <hr className="border border-black w-3/5 mx-auto my-7" />
            <br></br>
            <h2 className="text-4xl font-bold text-gray-900">
              About the team
            </h2>
            <p className="text-xl text-black mt-3 mb-6">
              We’re a dynamic group of individuals who are passionate about what we
              do and dedicated to delivering the best results for our clients.
            </p>
            <br />
            <div className="grid md:grid-cols-2 gap-6 ">
              {teamMembers.map((member, index) => (
                <Card key={index} className="flex items-center p-4 gap-4 shadow-md" 
                  style ={{ fontFamily: "Arial, sans-serif" }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-lg object-cover"
                  />
                  <CardContent>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-black">{member.role}</p>
                    <p className="text-sm text-black mt-2">{member.description}</p>
                    <div className="mt-3 flex items-center gap-2"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          <Footer />
        </div>
        </>
      );
    }
