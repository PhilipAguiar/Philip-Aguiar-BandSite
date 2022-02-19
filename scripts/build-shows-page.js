const api_key = "8c459552-b57f-4ec1-9203-190b3b6a41f7";

axios
  .get(`https://project-1-api.herokuapp.com/showdates?api_key=${api_key}`)
  .then((result) => {
    console.log(result.data);
    populateDates(result.data);
  })
  .catch((error) => {});

// Header Section

const header = document.querySelector("header");

const hero = document.createElement("section");
hero.classList.add("hero");
header.after(hero);

const heroOverlay = elementCreator("div", "hero__overlay", hero);

const heroContainer = elementCreator("div", "hero__container", hero);

const heroTitle = elementCreator("h3", "hero__title", heroContainer);
heroTitle.innerText = "Beautiful Beasts Album";

const heroHeaderTop = elementCreator("h1", "hero__header", heroContainer);
heroHeaderTop.innerText = "Queen of Yellow x";

const heroHeaderBottom = elementCreator("h1", "hero__header", heroContainer);
heroHeaderBottom.innerText = "For The Stings";

const heroPlayer = elementCreator("iframe", "hero__player", hero);
heroPlayer.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/255766399&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true");

// special header layout for desktop
const heroContainerDesktop = elementCreator("div", "hero__desktop-container", hero);

const heroContainerHeaderWrapper = elementCreator("div", "hero__desktop-wrapper", heroContainerDesktop);

const heroTitleDesktop = elementCreator("h3", "hero__title hero__title--desktop", heroContainerHeaderWrapper);
heroTitleDesktop.innerText = "Beautiful Beasts Album";

const heroHeaderTopDesktop = elementCreator("h1", "hero__header hero__header--desktop", heroContainerHeaderWrapper);
heroHeaderTopDesktop.innerText = "Queen of Yellow";

const heroHeaderBottomDesktop = elementCreator("h1", "hero__header hero__header--desktop", heroContainerHeaderWrapper);
heroHeaderBottomDesktop.innerText = "x For The Stings";

const heroPlayerDesktop = elementCreator("iframe", "hero__player hero__player--desktop", heroContainerDesktop);
heroPlayerDesktop.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/255766399&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true");

// Shows Section

const shows = document.createElement("section");
shows.classList.add("shows");
hero.after(shows);

const showsTitle = elementCreator("h2", "shows__title", shows);
showsTitle.innerText = "Shows";

const showsWrapper = elementCreator("div", "shows__wrapper", shows);

// create Header container tablet+

const showsHeadersCard = elementCreator("div", "shows__header-container shows__header-container--hidden shows__header-container--divider", showsWrapper);

const showsHeadersDateItem = elementCreator("div", "shows__item shows__item--desktop-padding", showsHeadersCard);

const showsHeadersDateHeader = elementCreator("div", "shows__header", showsHeadersDateItem);
showsHeadersDateHeader.innerText = "Date";

const showsHeadersVenueItem = elementCreator("div", "shows__item", showsHeadersCard);

const showsHeadersVenueHeader = elementCreator("div", "shows__header", showsHeadersVenueItem);
showsHeadersVenueHeader.innerText = "Venue";

const showsHeadersLocationItem = elementCreator("div", "shows__item", showsHeadersCard);

const showsHeadersLocationHeader = elementCreator("div", "shows__header", showsHeadersLocationItem);
showsHeadersLocationHeader.innerText = "Location";

const showEmptyItem = elementCreator("div", "shows__item", showsHeadersCard);

// function that populates show objects into the page

const populateDates = (showsList) => {
  showsList.forEach((show, index) => {
    // create card
    const showCard = elementCreator("div", "shows__card", showsWrapper);

    // create Date
    const showDateItem = elementCreator("div", "shows__item shows__item--desktop-padding", showCard);

    const showDateHeader = elementCreator("h5", "shows__header", showDateItem);
    showDateHeader.classList.add("shows__header--hidden");
    showDateHeader.innerText = "DATE";

    const showDateText = elementCreator("p", "shows__text shows__text--date", showDateItem);

    const newDate = new Date(parseInt(show.date));

    showDateText.innerText = newDate.toDateString();

    // create Venue
    const showVenueItem = elementCreator("div", "shows__item", showCard);

    const showVenueHeader = elementCreator("h5", "shows__header", showVenueItem);
    showVenueHeader.classList.add("shows__header--hidden");
    showVenueHeader.innerText = "VENUE";

    const showVenueText = elementCreator("p", "shows__text", showVenueItem);
    showVenueText.innerText = show.place;

    // create Location
    const showLocationItem = elementCreator("div", "shows__item", showCard);

    const showLocationHeader = elementCreator("h5", "shows__header", showLocationItem);
    showLocationHeader.classList.add("shows__header--hidden");
    showLocationHeader.innerText = "LOCATION";

    const showLocationText = elementCreator("p", "shows__text", showLocationItem);
    showLocationText.innerText = show.location;

    // create Button
    const showButtonItem = elementCreator("div", "shows__item shows__item--button-end", showCard);

    const showButton = elementCreator("button", "shows__button", showButtonItem);
    showButton.innerText = "BUY TICKETS";

    // special modifier classes needed for tablet+ sizes

    if (index > 0) {
      showDateHeader.classList.add("shows__header--hidden");
      showVenueHeader.classList.add("shows__header--hidden");
      showLocationHeader.classList.add("shows__header--hidden");
    }
  });
  addShowsCardEventListeners();
};
// initilize dates

// event listener for shows card animations
function addShowsCardEventListeners() {
  const showCards = document.querySelectorAll(".shows__card");
  showCards.forEach((showCard) => {
    showCard.addEventListener("click", (e) => {
      clearBackgrounds();
      e.currentTarget.classList.add("shows__card--active");
    });
  });
}

//  function that clears the active show card background property from non active cards
const clearBackgrounds = () => {
  const showCards = document.querySelectorAll(".shows__card");
  showCards.forEach((showCard) => {
    showCard.classList.remove("shows__card--active");
  });
};
