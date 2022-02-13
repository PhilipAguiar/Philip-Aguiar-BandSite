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

    showsList.forEach((show,index)=>{

        // create card
        let showCard = elementCreator("div","shows__card",showsWrapper)

        
        // create Date
        let showDateItem = elementCreator("div","shows__item shows__item--desktop-padding",showCard)

        let showsDateHeader = elementCreator("h5","shows__header",showDateItem)
        showsDateHeader.innerText = "DATE";

        let showsDateText = elementCreator("p","shows__text shows__text--date",showDateItem)
        showsDateText.innerText = show.date;

        // create Venue
        let showVenueItem = elementCreator("div","shows__item",showCard)

        let showsVenueHeader = elementCreator("h5","shows__header",showVenueItem)
        showsVenueHeader.innerText = "VENUE";

        let showsVenueText = elementCreator("p","shows__text",showVenueItem)
        showsVenueText.innerText = show.venue

        // create Location
        let showLocationItem = elementCreator("div","shows__item",showCard)

        let showsLocationHeader = elementCreator("h5","shows__header",showLocationItem)
        showsLocationHeader.innerText = "LOCATION";

        let showsLocationText = elementCreator("p","shows__text",showLocationItem)
        showsLocationText.innerText = show.location     
        
        // create Button
        let showButtonItem = elementCreator("div","shows__item shows__item--button-end",showCard)

        let showsButton =  elementCreator("button","shows__button",showButtonItem) 
        showsButton.innerText = "BUY TICKETS" 

        if(index===0){

            let showsHiddenHeader = document.createElement("h5")
            showsHiddenHeader.classList.add("shows__header")

            showsButton.before(showsHiddenHeader)
            showsButton.classList.add("shows__button--center")
        
        }
        if(index>0){

            showsDateHeader.classList.add("shows__header--hidden")
            showsVenueHeader.classList.add("shows__header--hidden")
            showsLocationHeader.classList.add("shows__header--hidden")
        }


    })
}

populateDates()