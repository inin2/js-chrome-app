const quotes = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Lorem ipsum",
  },
  {
    quote: "Integer dignissim mi eget urna efficitur, in mattis magna commodo.",
    author: "Lorem ipsum",
  },
  {
    quote: "Suspendisse ultricies felis sed euismod ornare.",
    author: "Lorem ipsum",
  },
  {
    quote: "Sed convallis orci a massa maximus sollicitudin.",
    author: "Lorem ipsum",
  },
  {
    quote: "Fusce et velit in arcu scelerisque rhoncus.",
    author: "Lorem ipsum",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Lorem ipsum",
  },
  {
    quote: "Integer dignissim mi eget urna efficitur, in mattis magna commodo.",
    author: "Lorem ipsum",
  },
  {
    quote: "Suspendisse ultricies felis sed euismod ornare.",
    author: "Lorem ipsum",
  },
  {
    quote: "Sed convallis orci a massa maximus sollicitudin.",
    author: "Lorem ipsum",
  },
  {
    quote: "Fusce et velit in arcu scelerisque rhoncus.",
    author: "Lorem ipsum",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
