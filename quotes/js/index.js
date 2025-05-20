const quoteContainer = document.getElementById('quote__container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const authorPic = document.getElementById('pic');
const newQuoteBtn = document.getElementById('new__quote');
var video = document.getElementById("bgvid");
var btn = document.getElementById("mutebtn");

function newQuote() {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  if (!quote.author) {
    authorText.textContent = 'Unkown';
  } else {
    authorText.textContent = quote.author;
  }

  if (quote.text.length > 120) {
    quoteText.classList.add('long__quote');
  } else {
    quoteText.classList.remove('long__quote');

  }
  quoteText.textContent = quote.text;
  document.getElementById("pic").src = quote.pic;
}

function MuteVid() {
  if (video.muted) {
    video.muted = false;
    btn.innerHTML = "Mute";
  } else {
    video.muted = true;
    btn.innerHTML = "Unmute";
  }
}

newQuoteBtn.addEventListener('click', newQuote);
newQuote();
