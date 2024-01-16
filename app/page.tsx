"use client";
import Image from "next/image";
import { Metadata } from "next";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <button
        className="btn btn-primary"
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "a" }, { name: "b" }];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
    </main>
  );
}

export const metadata: Metadata = {
  title: "...",
};
