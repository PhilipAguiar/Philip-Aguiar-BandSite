let showsList= [
    {
        date:"Mon Sept 06 2021",
        venue:"Ronald Lane",
        location:"San Francisco, CA"
    },
    {
        date:"Tues Sept 21 2021",
        venue:"Pier 3 East",
        location:"San Francisco, CA"
    },
    {
        date:"Fri Oct 15 2021",
        venue:"View Lounge",
        location:"San Francisco, CA"
    },
     {
        date:"Sat Nov 06 2021",
        venue:"Hyatt Agency",
        location:"San Francisco, CA"
    },
     {
        date:"Fri Noc 26 2021",
        venue:"Moscow Center",
        location:"San Francisco, CA"
    }, 
    {
        date:"Wed Dec 15 2021",
        venue:"Press Club",
        location:"San Francisco, CA"
    }
]











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


// Shows Section

let shows = document.createElement("section");
shows.classList.add("shows");
hero.after(shows);

let showsTitle = elementCreator("h2","shows__title",shows)
showsTitle.innerText = "Shows"

let showsWrapper = elementCreator("div","shows__wrapper",shows)

const populateDates = () =>{

    showsList.forEach((show)=>{

        // create card
        let showCard = elementCreator("div","shows__card",showsWrapper)

        let showItem = elementCreator("div","shows__item shows__item--desktop-padding",showCard)

        // create Date

        let showsDateHeader = elementCreator("h5","shows__header",showItem)
        showsDateHeader.innerText = "DATE";

        let showsDateText = elementCreator("p","shows__text shows__text--date",showItem)
        showsDateText.innerText = show.date;

        // create Venue

        let showsVenueHeader = elementCreator("h5","shows__header",showItem)
        showsVenueHeader.innerText = "DATE";

        let showsVenueText = elementCreator("p","shows__text",showItem)
        showsVenueText.innerText = show.venue

        // create Location

        let showsLocationHeader = elementCreator("h5","shows__header",showItem)
        showsLocationHeader.innerText = "DATE";

        let showsLocationText = elementCreator("p","shows__text",showItem)
        showsLocationText.innerText = show.location     
        
        // create Button

        let showsButton =  elementCreator("button","shows__button",showCard) 
        showsButton.innerText = "BUY TICKETS" 
    })
}

populateDates()