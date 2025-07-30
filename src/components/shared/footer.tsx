const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-1 text-sm py-4">
      <span>Inspirational quotes provided by</span>
      <a
        href="https://zenquotes.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        ZenQuotes API
      </a>
    </div>
  );
};

export default Footer;
