import fetchQuote from "@/components/apiCall/fetchQuote";

const Home = () => {
  fetchQuote();
  return <div>Home Page</div>;
};

export default Home;
