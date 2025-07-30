const fetchQuote = async () => {
  const response = await fetch("/api/quote");
  const data = await response.json();
  console.log("data fetched:", data[0].q);
  return data[0].q;
};

export default fetchQuote;
