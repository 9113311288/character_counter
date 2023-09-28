const textarea = document.querySelector(".text-area");
const char_element = document.querySelector(".char-number");
const word_element = document.querySelector(".word-number");
const twitter_element = document.querySelector(".twitter-number");
const insta_element = document.querySelector(".insta-number");

let x_char_limit = 280;
let insta_char_limit = 160;

// Function to count words
const wordCounter = (text) => {
  const words = text.trim().split(/\s+/);
  return words.length;
};

// Function to update word count
const updateWordCount = (text) => {
  const wordCount = wordCounter(text);
  word_element.innerText = wordCount;
};

// char function
const charCounter = (e) => {
  char_element.innerText = e.target.value.length;
};

// twitter function
const twitterCounter = (e) => {
  const charCount = e.target.value.length;
  twitter_element.innerText = x_char_limit - charCount;
  colorChange("twitter", charCount);
};

// insta function
const instaCounter = (e) => {
  const charCount = e.target.value.length;
  insta_element.innerText = insta_char_limit - charCount;
  colorChange("instagram", charCount);
};

// Main event listener
textarea.addEventListener("input", (e) => {
  charCounter(e);
  updateWordCount(e.target.value);
  twitterCounter(e);
  instaCounter(e);
});
