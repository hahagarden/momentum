const quotes = [
  {
    quote: "Never give up. Never, never, never give up.",
    author: "Winston Churchill",
  },
  {
    quote: "Am I ready to fail? Am I failing a lot?",
    author: "Bodo schafer",
  },
  {
    quote: "",
    author: "",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
