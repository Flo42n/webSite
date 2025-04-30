import * as React from "react";

import { redirect } from "next/navigation";

export const Header = () => {
  return (
    <header className="sticky top-0 mb-6 flex flex-row justify-around w-11/12 mx-auto p-5 rounded-2xl bg-radial-[at_50%_75%] from-green-500 to-green-900  text-white text-2xl font-semibold shadow-2xl z-40">
      {" "}
      <p
        className="hover:cursor-pointer hover:scale-110 duration-500 ease-in-out"
        onClick={() => redirect("/")}
      >
        Home
      </p>
      <p
        className="hover:cursor-pointer hover:scale-110 duration-500 ease-in-out"
        onClick={() => redirect("/about_the_game")}
      >
        About the game
      </p>
      <p
        className="hover:cursor-pointer hover:scale-110 duration-500 ease-in-out"
        onClick={() => redirect("our_team")}
      >
        Our team
      </p>
    </header>
  );
};
