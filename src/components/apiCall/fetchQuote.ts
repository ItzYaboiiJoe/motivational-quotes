const fetchQuote = async () => {
  const response = await fetch("/api/quote");
  const data = await response.json();

  const quote = data[0].q;
  const author = data[0].a;

  return { quote, author };
};

export default fetchQuote;
