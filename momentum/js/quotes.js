const quotes = [
  {
    quote: "Never give up. Never, never, never give up.",
    author: " -Winston Churchill",
  },
  {
    quote: "Am I ready to fail? Am I failing a lot?",
    author: " -Bodo schafer",
  },
  {
    quote:
      "Pain makes you stronger, fear makes you braver, heartbreak makes you wiser.",
    author: " -Drake",
  },
  {
    quote: "We generate fears while we sit. We overcome them by action.",
    author: " -Dr.Henry Link",
  },
  {
    quote:
      "By the time a man realizes that maybe his father was right, he usually has a son who thinks he's wrong.",
    author: " -Charles Wadsworth",
  },
  {
    quote: "If it comes, let it. If it goes, let it.",
    author: "",
  },
  { quote: "All things are difficult before they are easy.", author: "" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
