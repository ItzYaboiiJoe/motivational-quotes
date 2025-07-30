"use client";

import { useEffect, useState } from "react";
import fetchQuote from "@/components/apiCall/fetchQuote";

const Home = () => {
  const [quote, setQuote] = useState("Loading...");

  useEffect(() => {
    const getQuote = async () => {
      const q = await fetchQuote();
      setQuote(q);
    };

    getQuote();
  }, []);

  return <div>{quote}</div>;
};

export default Home;
