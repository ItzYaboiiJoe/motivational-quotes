import React from "react";

async function Home() {
  const res = await fetch("https://zenquotes.io/api/today", {
    cache: "no-store",
  });
  const data = await res.json();

  const quote = data[0].q;
  const author = data[0].a;

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <p className="text-2xl italic max-w-2xl">{quote}</p>
      <p className="mt-4 text-lg font-semibold text-gray-600">— {author}</p>
    </div>
  );
}

export default Home;
