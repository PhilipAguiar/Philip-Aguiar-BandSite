let commentList = [
    {
      name: "Miles Acosta",
  
      date: "12/20/2020",
  
      comment:
        "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",

      avatar: ""  
    },
    {
      name: "Emilie Beach",
  
      date: "01/09/2021",
  
      comment:
        "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
      
      avatar: ""    
    },
{
    name: "Connor Walton",

    date: "02/17/2021",

    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",

    avatar: ""    
  },
];


let comments = document.createElement("section");
comments.classList.add("comments");
document.querySelector(".photo-gallery").after(comments);


elementCreator("h2",'comments__title',comments)
    .innerText = "Join the Conversation";

let commentsWrapper = elementCreator("div",'comments__wrapper',comments)

let commentsImagesContainer = elementCreator("div",'comments__image-containter',commentsWrapper)

let commentsImage = elementCreator("img",'comments__image comments__image--posted',commentsImagesContainer);


let commentsForm = elementCreator("form",'comments__form',commentsWrapper);

let commentsNameLabel = elementCreator("label",'comments__label',commentsForm)
  .innerText = "NAME"

let commentsNameInput = elementCreator("input",'comments__input',commentsForm)
commentsNameInput.setAttribute('type','text')
commentsNameInput.setAttribute('placeholder','Enter your name')
commentsNameInput.setAttribute('name','name')

let commentsCommentLabel = elementCreator("label",'comments__label',commentsForm)
    .innerText = "COMMENT";

let commentsTextInput = elementCreator("textArea",'comments__input comments__input--large',commentsForm)
commentsTextInput.setAttribute('placeholder','Add a new comment')
commentsTextInput.setAttribute('name','comment')

let commentsButton = elementCreator("button",'comments__button',commentsForm)
    .innerText = "COMMENT"
    
let commentsReverseWrapper = elementCreator("div",'comments__reverse-wrapper',comments)



const displayComment = (commentObject) =>{

    let commentsPost = elementCreator("div",'comments__post',commentsReverseWrapper)
        
    let commentsImageContainter = elementCreator("div",'comments__image-containter',commentsPost)

    let createCommentsImage = elementCreator("div",'comments__image',commentsImageContainter)

    if(commentObject.avatar !== ""){
        console.log(createCommentsImage.style.backgroundImage)
        createCommentsImage.style.backgroundImage = commentObject.avatar;
    }
   

    let commentsContainer = elementCreator("div",'comments__container',commentsPost);

    let commentsInfoWrapper = elementCreator("div",'comments__info-wrapper',commentsContainer);

    elementCreator("h5",'comments__name',commentsInfoWrapper)
        .innerText= commentObject.name

    elementCreator("p",'comments__date',commentsInfoWrapper)
        .innerText= commentObject.date

     elementCreator("p",'comments__comment',commentsContainer)
         .innerText= commentObject.comment   

}
const updateComments = () => {
    commentsReverseWrapper.innerHTML = ""
    
    commentList.forEach((comment)=>{
        
        displayComment(comment)

         
    })
}

const getCurrentTime = () =>{
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    return today = mm + '/' + dd + '/' + yyyy;
}
updateComments();



const addNewComment = (newName,newDate,newComment,newAvatar) =>{

    commentList.push({
        name: newName,
        date: newDate,
        comment: newComment,
        avatar: newAvatar
    })

    updateComments();

}


commentsForm.addEventListener('submit',(event)=>{
    event.preventDefault();

    let name ="";
    let comment ="";
    let date = getCurrentTime();
    let avatar = "url(/assets/images/Mohan-muruge.jpg)";

    console.log(avatar)

    if(event.target.name.value !== ""){
        name = event.target.name.value;
    }else{
        event.target.name.classList.add('comments__input--empty');
        alert("Please enter missing values")
        return
    }

    if(event.target.comment.value !== ""){
        comment = event.target.comment.value;
    }else{
        console.log(event.target.comment.value)
        event.target.comment.classList.add('comments__input--empty')
        alert("Please enter missing values")
        return;
    }

    if(name !== "" && comment !== ""){
        addNewComment(name,date,comment,avatar)
    
    }
    document.querySelector(".comments__form").reset();
    event.target.name.classList.remove("comments__input--empty")
    event.target.comment.classList.remove("comments__input--empty")
})


