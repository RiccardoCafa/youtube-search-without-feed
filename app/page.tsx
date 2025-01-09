"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function Home() {
  const [linkYoutube, setLinkYoutube] = useState<string>("");

  function onSearchKeyDown(ev: React.KeyboardEvent<HTMLInputElement>) {
    console.log(ev.key);
    if (ev.key == "Enter") {
      search();
    }
  }

  function search() {
    window.location.href = `https://www.youtube.com/results?search_query=${linkYoutube}`;
  }

  return (
    <main className="w-[100vw] h-[100vh] justify-center align-middle flex flex-col items-center px-8">
      <h1 className="mb-4 text-pretty text-xl">YouTube with NO feed to distract :)</h1>
      <input
        placeholder="Search on YouTube"
        className="bg-transparent text-white border-2 rounded-lg p-1 min-w-[300px] max-w-[800px] w-full border-red-500 mb-2"
        value={linkYoutube}
        onChange={(ev) => setLinkYoutube(ev.target.value)}
        onKeyDown={(ev) => onSearchKeyDown(ev)}
      ></input>
      <button
        className="bg-transparent flex flex-row hover:bg-red-500 px-4 py-2 rounded-md"
        onClick={() => search()}
      >
        <MagnifyingGlassIcon className="size-5"></MagnifyingGlassIcon>
        Search
      </button>
    </main>
  );
}
