let hero = document.createElement("section");
hero.classList.add("hero");
document.querySelector("header").after(hero);

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
