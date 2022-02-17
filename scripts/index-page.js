const api_key = "8c459552-b57f-4ec1-9203-190b3b6a41f7";
// Array that holds Comment Objects

// let commentList = [
//     {
//       name: "Miles Acosta",
  
//       date: "12/20/2020",
  
//       comment:
//         "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",

//       avatar: ""  
//     },
//     {
//       name: "Emilie Beach",
  
//       date: "01/09/2021",
  
//       comment:
//         "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
      
//       avatar: ""    
//     },
// {
//     name: "Connor Walton",

//     date: "02/17/2021",

//     comment:
//       "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",

//     avatar: ""    
//   },
// ];



// Create comment Section

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

// function that creates new comment to screen

const displayComment = (commentObject) =>{

    let commentsPost = document.createElement('div')
    commentsPost.classList.add("comments__post")
    commentsReverseWrapper.prepend(commentsPost)

    let commentsImageContainter = elementCreator("div",'comments__image-containter',commentsPost)
    let createCommentsImage = elementCreator("div",'comments__image',commentsImageContainter)

    if(commentObject.avatar !== ""){
        createCommentsImage.style.backgroundImage = commentObject.avatar;
    }   

    let commentsContainer = elementCreator("div",'comments__container',commentsPost);
    let commentsInfoWrapper = elementCreator("div",'comments__info-wrapper',commentsContainer);

    elementCreator("h5",'comments__name',commentsInfoWrapper)
        .innerText= commentObject.name

    elementCreator("p",'comments__date',commentsInfoWrapper)
        .innerText= timeSince(getCurrentTime(commentObject.timestamp))

     elementCreator("p",'comments__comment',commentsContainer)
         .innerText= commentObject.comment   
         
         
}

// function that refreshes the comment page

const updateComments = () => {
    
    axios
  .get(
    `https://project-1-api.herokuapp.com/comments?api_key=${api_key}`
  )
  .then((result) => {
    commentsReverseWrapper.innerHTML = ""
    
    // Changes logic for first 3 cards so all comments are sorted by dates

    for(let i = 2; i>=0; i--){
        displayComment(result.data[i]);
    }

    result.data.forEach((comment, index)=>{
        if(index>2){
       displayComment(comment);
        }
    })
    
    
  })
  .catch((error) => {});
}

// function that gets current time at the time of form submitting

const getCurrentTime = (milliseconds) =>{
    let today = new Date(milliseconds);
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    return `${month}/${day}/${year}/${hour}/${minute}/${second}`
}

// funtion that adds new comment object to comment list

const addNewComment = (newName,newComment) =>{

    axios
  .post(
    `https://project-1-api.herokuapp.com/comments?api_key=${api_key}`,{
        name:newName,
        comment: newComment
    }
  )
  .then((result) => {
      
    updateComments();
     console.log(result)
    
       
    })
    
  .catch((error) => {});


    // commentList.push({
    //     name: newName,
    //     timestamp: newTimestamp,
    //     comment: newComment,
    //     avatar: newAvatar
    // })
    
}

// Event Listener to submit a new comment

commentsForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    
    let name ="";
    let comment ="";
    let timestamp = Date.now();
    let avatar = "url(/assets/images/Mohan-muruge.jpg)";

    // Handle errors if any fields are empty

    if(event.target.name.value === "" && event.target.comment.value === ""){
        event.target.name.classList.add('comments__input--empty');
        event.target.comment.classList.add('comments__input--empty')
        alert("Please enter missing values")
        return;
    }
    
     if(event.target.name.value !== ""){
        name = event.target.name.value;
    } else{
        event.target.name.classList.add('comments__input--empty');
        alert("Please enter missing values")
        return
    }

    if(event.target.comment.value !== ""){
        comment = event.target.comment.value;
    } else{
        event.target.comment.classList.add('comments__input--empty')
        alert("Please enter missing values")
        return;
    }

    if(name !== "" && comment !== ""){
        addNewComment(name,comment)
    }

    document.querySelector(".comments__form").reset();
    event.target.name.classList.remove("comments__input--empty")
    event.target.comment.classList.remove("comments__input--empty")
})

// function that converts comment dates into

const timeSince = (commentTime) => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSecond = currentDate.getSeconds();
    let splitDate =commentTime.split('/')
    let commentYear = splitDate[2]
    let commentMonth = splitDate[0]
    let commentDay = splitDate[1]
    let commentHour;
    let commentMinute;
    let commentSecond;

    if(splitDate.length>3){
        commentHour = splitDate[3];
        commentMinute = splitDate[4];
        commentSecond = splitDate[5];
    }
    
    if(currentYear != commentYear){
        if((currentYear - commentYear)===1){
            return(`1 Year Ago`)
        }
        return(`${currentYear - commentYear} Years Ago`)
        
    }
    if(currentMonth != commentMonth){
        if((currentYear - commentYear)===1){
            return(`1 Month Ago`)
        }
        return(`${currentMonth - commentMonth} Months Ago`)
        }
    if(currentDay != commentDay){
        if((currentDay - commentDay)===1){
            return(`1 Day Ago`)
        }
        return(`${currentDay - commentDay} Days Ago`)
        }    
    if(currentHour != commentHour){
        if((currentHour - commentHour)===1){
            return(`1 Hour Ago`)
        }
        return(`${currentHour - commentHour} Hours Ago`)
       } 
    if(currentMinute != commentMinute){
        if((currentMinute - commentMinute)===1){
            return(`1 Minute Ago`)
        }
        return(`${currentMinute - commentMinute} Minutes Ago`)
        }       
    if(currentSecond != commentSecond){
        if((currentSecond - commentSecond)===1){
            return(`1 Second Ago`)
            }
            return(`${currentSecond - commentSecond} Seconds ago`)
        }
    return(`Just Now!`)
}

// initilize default comments


updateComments();
