"use client";

import { useEffect, useState } from "react";
import fetchQuote from "@/components/apiCall/fetchQuote";

const Home = () => {
  const [quote, setQuote] = useState<string | null>(null);
  const [author, setAuthor] = useState<string | null>(null);

  useEffect(() => {
    const getQuote = async () => {
      const { quote, author } = await fetchQuote();
      setQuote(quote);
      setAuthor(author);
    };

    getQuote();
  }, []);

  return (
    <div className="p-4 text-center">
      {quote ? (
        <>
          <p className="text-xl italic">{quote}</p>
          <p className="mt-2 text-lg font-semibold">— {author}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
