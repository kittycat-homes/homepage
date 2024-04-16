"use client";

import Title from "./components/title";

export default function Home() {
  return (
    <main className="h-svh overflow-hidden bg-base-100 w-screen text-neutral flex flex-col justify-center p-12 gap-12">
      <div className="flex-1">
        <Title />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-center w-full flex-col">
          <h1 className="font-black text-center text-4xl md:text-7xl stroke-fuchsia-800">
            welcome to kittycat.homes
          </h1>
          <p className="text-center">
            we are{" "}
            <a
              className="link link-neutral"
              href="https://tiger.kittycat.homes"
            >
              tiger
            </a>{" "}
            and{" "}
            <a className="link link-neutral" href="https://zoe.kittycat.homes">
              zoe
            </a>
            . we are literally girlfriends.
          </p>
        </div>
      </div>
    </main>
  );
}
