
var posterMainPage = document.querySelector(".main-poster");
var imageElement = document.querySelector(`.poster-img`);
var titleElement = document.querySelector(`.poster-title`);
var quoteElement = document.querySelector(`.poster-quote`);

var posterFormPage = document.querySelector(".poster-form");
var posterSavedPage = document.querySelector(".saved-posters");

var randomPosterButton = document.querySelector(".show-random");
var formPosterButton = document.querySelector(".show-form");
var backButton = document.querySelector(".back-to-main");
var nevermindButton = document.querySelector(".show-main");
var showSavedPosterButton = document.querySelector(".show-saved");
var showMyPosterButton = document.querySelector(".make-poster");
var savedPosterButton = document.querySelector(".save-poster");

var customUrlInput = document.querySelector("#poster-image-url");
var customTitleInput = document.querySelector("#poster-title");
var customQuoteInput = document.querySelector("#poster-quote");

var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg",
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom",
];
var quotes = [
  "Don't downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others' limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall.",
];

var savedPosters = [];
var currentPoster;

createRandomPoster();
randomPosterButton.addEventListener("click", createRandomPoster);
formPosterButton.addEventListener("click", displayPosterForm);
showSavedPosterButton.addEventListener("click", displaySavedPosters);
backButton.addEventListener("click", displayMainPage);
nevermindButton.addEventListener("click", displayMainPage);
showMyPosterButton.addEventListener("click", createCustomPoster);
savedPosterButton.addEventListener("click", savePoster);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(),
    imageURL: imageURL,
    title: title,
    quote: quote,
  };
}

function createRandomPoster() {
  var poster = createPoster(
    images[getRandomIndex(images)],
    titles[getRandomIndex(titles)],
    quotes[getRandomIndex(quotes)]
  );
  displayPoster(poster);
}

function displayPoster(input) {
  titleElement.innerHTML = input.title;
  imageElement.src = input.imageURL;
  quoteElement.innerHTML = input.quote;
  currentPoster = input;
}

function displayMainPage() {
  posterMainPage.classList.remove("hidden");
  posterSavedPage.classList.add("hidden");
  posterFormPage.classList.add("hidden");
}

function displayPosterForm() {
  posterFormPage.classList.remove("hidden");
  posterMainPage.classList.add("hidden");
}

function displaySavedPosters() {
  createPosterGrid();
  posterSavedPage.classList.remove("hidden");
  posterMainPage.classList.add("hidden");
}

function createCustomPoster() {
  event.preventDefault();
  var poster = createPoster(
    customUrlInput.value,
    customTitleInput.value,
    customQuoteInput.value
  );
  posterMainPage.classList.remove("hidden");
  posterFormPage.classList.add("hidden");
  displayPoster(poster);
}

function savePoster() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster);
  } else {
    console.log("This poster already exists!");
  }
}

function createPosterGrid() {
  var grid = document.querySelector(".saved-posters-grid");
  grid.innerHTML = "";
  for (let i = 0; i < savedPosters.length; i++) {
    var saveImage = document.createElement("img");
    var saveTitle = document.createElement("h2");
    var saveQuote = document.createElement("h4");
    var posterElement = document.createElement("div");

    saveImage.src = savedPosters[i].imageURL;
    saveImage.alt = "nothing to see here";
    saveTitle.innerHTML = savedPosters[i].title;
    saveQuote.innerHTML = savedPosters[i].quote;

    posterElement.classList.add("mini-poster");
    posterElement.id = savedPosters[i].id;

    posterElement.appendChild(saveImage);
    posterElement.appendChild(saveTitle);
    posterElement.appendChild(saveQuote);
    grid.appendChild(posterElement);
  }
  grid.addEventListener("dblclick", function (event) {
    var miniPoster = event.target.closest("div");
    var posterId = miniPoster.id;
    deletePoster(posterId);
  });
}

function deletePoster(posterId) {
  for (var i = 0; i < savedPosters.length; i++) {
    if (posterId == savedPosters[i].id) {
      savedPosters.splice(i, 1);
    }
  }
  createPosterGrid();
}





