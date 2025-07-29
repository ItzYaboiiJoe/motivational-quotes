const fetchQuote = async () => {
  const response = await fetch("https://zenquotes.io/api/today");
  const data = await response.json();

  console.log(`data fetched:`, data);
  return data;
};

export default fetchQuote;
