const api_key = "8c459552-b57f-4ec1-9203-190b3b6a41f7";

// Array object that houses show objects

// let showsList= [
//     {
//         date:"Mon Sept 06 2021",
//         venue:"Ronald Lane",
//         location:"San Francisco, CA"
//     },
//     {
//         date:"Tues Sept 21 2021",
//         venue:"Pier 3 East",
//         location:"San Francisco, CA"
//     },
//     {
//         date:"Fri Oct 15 2021",
//         venue:"View Lounge",
//         location:"San Francisco, CA"
//     },
//      {
//         date:"Sat Nov 06 2021",
//         venue:"Hyatt Agency",
//         location:"San Francisco, CA"
//     },
//      {
//         date:"Fri Noc 26 2021",
//         venue:"Moscow Center",
//         location:"San Francisco, CA"
//     }, 
//     {
//         date:"Wed Dec 15 2021",
//         venue:"Press Club",
//         location:"San Francisco, CA"
//     }
// ];

axios
  .get(
    `https://project-1-api.herokuapp.com/showdates?api_key=${api_key}`
  )
  .then((result) => {

    console.log(result.data);
    
  })
  .catch((error) => {});

// Header Section

let header =  document.querySelector("header")

let hero = document.createElement("section");
hero.classList.add("hero");
header.after(hero);

let heroOverlay = elementCreator("div","hero__overlay",hero)

let heroContainer = elementCreator("div","hero__container",hero)

let heroTitle = elementCreator("h3","hero__title",heroContainer)
heroTitle.innerText = "Beautiful Beasts Album"

let heroHeaderTop = elementCreator("h1","hero__header",heroContainer)
heroHeaderTop.innerText = "Queen of Yellow x"

let heroHeaderBottom = elementCreator("h1","hero__header",heroContainer)
heroHeaderBottom.innerText = "For The Stings";

let heroPlayer = elementCreator("iframe","hero__player",hero)
heroPlayer.setAttribute("src","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/255766399&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true")

    // special header layout for desktop
let heroContainerDesktop = elementCreator("div","hero__desktop-container",hero)

let heroContainerHeaderWrapper = elementCreator("div","hero__desktop-wrapper",heroContainerDesktop)

let heroTitleDesktop = elementCreator("h3","hero__title hero__title--desktop",heroContainerHeaderWrapper)
heroTitleDesktop.innerText = "Beautiful Beasts Album"        

let heroHeaderTopDesktop = elementCreator("h1","hero__header hero__header--desktop",heroContainerHeaderWrapper)
heroHeaderTopDesktop.innerText = "Queen of Yellow"

let heroHeaderBottomDesktop = elementCreator("h1","hero__header hero__header--desktop",heroContainerHeaderWrapper)
heroHeaderBottomDesktop.innerText = "x For The Stings";

let heroPlayerDesktop = elementCreator("iframe","hero__player hero__player--desktop",heroContainerDesktop)
heroPlayerDesktop.setAttribute("src","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/255766399&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true")

// Shows Section

let shows = document.createElement("section");
shows.classList.add("shows");
hero.after(shows);

let showsTitle = elementCreator("h2","shows__title",shows)
showsTitle.innerText = "Shows"

let showsWrapper = elementCreator("div","shows__wrapper",shows)

        // create Header container tablet+

let showsHeadersCard = elementCreator("div","shows__header-container shows__header-container--hidden shows__header-container--divider",showsWrapper)

let showsHeadersDateItem = elementCreator("div","shows__item shows__item--desktop-padding",showsHeadersCard)

let showsHeadersDateHeader = elementCreator("div","shows__header",showsHeadersDateItem);
showsHeadersDateHeader.innerText =("Date")

let showsHeadersVenueItem = elementCreator("div","shows__item",showsHeadersCard)

let showsHeadersVenueHeader = elementCreator("div","shows__header",showsHeadersVenueItem);
showsHeadersVenueHeader.innerText =("Venue")

let showsHeadersLocationItem = elementCreator("div","shows__item",showsHeadersCard)

let showsHeadersLocationHeader = elementCreator("div","shows__header",showsHeadersLocationItem);
showsHeadersLocationHeader.innerText =("Location")

let showEmptyItem = elementCreator("div","shows__item",showsHeadersCard)

// function that populates show objects into the page

const populateDates = () =>{

    showsList.forEach((show,index)=>{

        // create card
        let showCard = elementCreator("div","shows__card",showsWrapper)

        // create Date
        let showDateItem = elementCreator("div","shows__item shows__item--desktop-padding",showCard)

        let showDateHeader = elementCreator("h5","shows__header",showDateItem)
        showDateHeader.classList.add("shows__header--hidden")
        showDateHeader.innerText = "DATE";

        let showDateText = elementCreator("p","shows__text shows__text--date",showDateItem)
        
        showDateText.innerText = show.date;

        // create Venue
        let showVenueItem = elementCreator("div","shows__item",showCard)

        let showVenueHeader = elementCreator("h5","shows__header",showVenueItem)
        showVenueHeader.classList.add("shows__header--hidden")
        showVenueHeader.innerText = "VENUE";

        let showVenueText = elementCreator("p","shows__text",showVenueItem)
        showVenueText.innerText = show.venue

        // create Location
        let showLocationItem = elementCreator("div","shows__item",showCard)

        let showLocationHeader = elementCreator("h5","shows__header",showLocationItem)
        showLocationHeader.classList.add("shows__header--hidden")
        showLocationHeader.innerText = "LOCATION";

        let showLocationText = elementCreator("p","shows__text",showLocationItem)
        showLocationText.innerText = show.location     
        
        // create Button
        let showButtonItem = elementCreator("div","shows__item shows__item--button-end",showCard)

        let showButton =  elementCreator("button","shows__button",showButtonItem) 
        showButton.innerText = "BUY TICKETS" 

        // special modifier classes needed for tablet+ sizes

        if(index>0){
            showDateHeader.classList.add("shows__header--hidden")
            showVenueHeader.classList.add("shows__header--hidden")
            showLocationHeader.classList.add("shows__header--hidden")
        }

    })
}
// initilize dates

populateDates();
// event listener for shows card animations

let showCards = document.querySelectorAll(".shows__card")

showCards.forEach(showCard=>{
   showCard.addEventListener("click",(e)=>{
    clearBackgrounds();
     e.currentTarget.classList.add("shows__card--active")
    })

})
//  function that clears the active show card background property from non active cards
const clearBackgrounds =() =>{
    showCards.forEach((showCard)=>{
        showCard.classList.remove("shows__card--active")
    })
}
