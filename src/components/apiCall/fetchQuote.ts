const fetchQuote = async () => {
  const response = await fetch("https://zenquotes.io/api/today");
  const data = await response.json();

  console.log(`data fetched:`, data[0].q);
  return data[0].q;
};

export default fetchQuote;
