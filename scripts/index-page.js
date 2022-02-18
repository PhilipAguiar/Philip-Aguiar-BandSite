const api_key = "8c459552-b57f-4ec1-9203-190b3b6a41f7";

// Create comment Section

let comments = document.createElement("section");
comments.classList.add("comments");
document.querySelector(".photo-gallery").after(comments);

elementCreator("h2", "comments__title", comments).innerText =
  "Join the Conversation";

let commentsWrapper = elementCreator("div", "comments__wrapper", comments);
let commentsImagesContainer = elementCreator(
  "div",
  "comments__image-container",
  commentsWrapper
);
let commentsImage = elementCreator(
  "img",
  "comments__image comments__image--posted",
  commentsImagesContainer
);
let commentsForm = elementCreator("form", "comments__form", commentsWrapper);

let commentsNameLabel = (elementCreator(
  "label",
  "comments__label",
  commentsForm
).innerText = "NAME");

let commentsNameInput = elementCreator(
  "input",
  "comments__input",
  commentsForm
);
commentsNameInput.setAttribute("type", "text");
commentsNameInput.setAttribute("placeholder", "Enter your name");
commentsNameInput.setAttribute("name", "name");

let commentsCommentLabel = (elementCreator(
  "label",
  "comments__label",
  commentsForm
).innerText = "COMMENT");

let commentsTextInput = elementCreator(
  "textArea",
  "comments__input comments__input--large",
  commentsForm
);
commentsTextInput.setAttribute("placeholder", "Add a new comment");
commentsTextInput.setAttribute("name", "comment");

let commentsButton = (elementCreator(
  "button",
  "comments__button",
  commentsForm
).innerText = "COMMENT");

let commentsReverseWrapper = elementCreator(
  "div",
  "comments__reverse-wrapper",
  comments
);

// function that creates new comment to screen

const displayComment = (commentObject) => {
  let commentsPost = document.createElement("div");
  commentsPost.classList.add("comments__post");
  commentsReverseWrapper.prepend(commentsPost);

  let commentsImageContainer = elementCreator(
    "div",
    "comments__image-container",
    commentsPost
  );
  let createCommentsImage = elementCreator(
    "div",
    "comments__image",
    commentsImageContainer
  );

  if (commentObject.avatar !== "") {
    createCommentsImage.style.backgroundImage = commentObject.avatar;
  }

  elementCreator("p", "comments__likes-counter", commentsImageContainer).innerText =
    commentObject.likes;

  let likesButton = elementCreator(
    "button",
    "comments__likes",
    commentsImageContainer
  );

  likesButton.innerText = "likes";
  likesButton.setAttribute("name", commentObject.id);
  let commentsContainer = elementCreator(
    "div",
    "comments__container",
    commentsPost
  );
  let commentsInfoWrapper = elementCreator(
    "div",
    "comments__info-wrapper",
    commentsContainer
  );

  elementCreator("h5", "comments__name", commentsInfoWrapper).innerText =
    commentObject.name;

  elementCreator("p", "comments__date", commentsInfoWrapper).innerText =
    timeSince(getCurrentTime(commentObject.timestamp));

  let commentsTextWrapper = elementCreator(
    "div",
    "comments__info-wrapper",
    commentsContainer
  );

  elementCreator("p", "comments__comment", commentsTextWrapper).innerText =
    commentObject.comment;

  
};

// function that refreshes the comment page

const updateComments = () => {
  axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`)
    .then((result) => {
      console.log(result);
      commentsReverseWrapper.innerHTML = "";

      // Changes logic for first 3 cards so all comments are sorted by dates

      for (let i = 2; i >= 0; i--) {
        displayComment(result.data[i]);
      }

      result.data.forEach((comment, index) => {
        if (index > 2) {
          displayComment(comment);
        }
      });
      addLikeButtonEventListeners();
    })
    .catch((error) => {});
};

// function that gets current time at the time of form submitting

const getCurrentTime = (milliseconds) => {
  let today = new Date(milliseconds);
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  return `${month}/${day}/${year}/${hour}/${minute}/${second}`;
};

// funtion that adds new comment object to comment list

const addNewComment = (newName, newComment) => {
  axios
    .post(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`, {
      name: newName,
      comment: newComment,
    })
    .then((result) => {
      updateComments();
      console.log(result);
    })

    .catch((error) => {});
};

// Event Listener to submit a new comment

commentsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = "";
  let comment = "";
  let timestamp = Date.now();
  let avatar = "url(/assets/images/Mohan-muruge.jpg)";

  // Handle errors if any fields are empty

  if (event.target.name.value === "" && event.target.comment.value === "") {
    event.target.name.classList.add("comments__input--empty");
    event.target.comment.classList.add("comments__input--empty");
    alert("Please enter missing values");
    return;
  }

  if (event.target.name.value !== "") {
    name = event.target.name.value;
  } else {
    event.target.name.classList.add("comments__input--empty");
    alert("Please enter missing values");
    return;
  }

  if (event.target.comment.value !== "") {
    comment = event.target.comment.value;
  } else {
    event.target.comment.classList.add("comments__input--empty");
    alert("Please enter missing values");
    return;
  }

  if (name !== "" && comment !== "") {
    addNewComment(name, comment);
  }

  document.querySelector(".comments__form").reset();
  event.target.name.classList.remove("comments__input--empty");
  event.target.comment.classList.remove("comments__input--empty");
});

// function that converts comment dates into

const timeSince = (commentTime) => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate();
  let currentHour = currentDate.getHours();
  let currentMinute = currentDate.getMinutes();
  let currentSecond = currentDate.getSeconds();
  let splitDate = commentTime.split("/");
  let commentYear = splitDate[2];
  let commentMonth = splitDate[0];
  let commentDay = splitDate[1];
  let commentHour;
  let commentMinute;
  let commentSecond;

  if (splitDate.length > 3) {
    commentHour = splitDate[3];
    commentMinute = splitDate[4];
    commentSecond = splitDate[5];
  }

  if (currentYear != commentYear) {
    if (currentYear - commentYear === 1) {
      return `1 Year Ago`;
    }
    return `${currentYear - commentYear} Years Ago`;
  }
  if (currentMonth != commentMonth) {
    if (currentYear - commentYear === 1) {
      return `1 Month Ago`;
    }
    return `${currentMonth - commentMonth} Months Ago`;
  }
  if (currentDay != commentDay) {
    if (currentDay - commentDay === 1) {
      return `1 Day Ago`;
    }
    return `${currentDay - commentDay} Days Ago`;
  }
  if (currentHour != commentHour) {
    if (currentHour - commentHour === 1) {
      return `1 Hour Ago`;
    }
    return `${currentHour - commentHour} Hours Ago`;
  }
  if (currentMinute != commentMinute) {
    if (currentMinute - commentMinute === 1) {
      return `1 Minute Ago`;
    }
    return `${currentMinute - commentMinute} Minutes Ago`;
  }
  if (currentSecond != commentSecond) {
    if (currentSecond - commentSecond === 1) {
      return `1 Second Ago`;
    }
    return `${currentSecond - commentSecond} Seconds ago`;
  }
  return `Just Now!`;
};

const addLikeButtonEventListeners = () => {
  let commentLikeButtons = document.querySelectorAll(".comments__likes");
  console.log(commentLikeButtons);

  commentLikeButtons.forEach((commentLikeButton) => {
    commentLikeButton.addEventListener("click", (event) => {
      event.preventDefault();
      addLikes(event.target.name);
    });
  });
};

// const findCommentId = (name, comment) => {
//   axios
//     .get(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`)

//     .then((result) => {
//       result.data.forEach((commentObject) => {
//         if(commentObject.name === name && commentObject.comment === comment){
//             return commentObject.id
//         }
//          console.error("There is no comment that matches")
//       });
//     })
//     .catch((error) => {});
// };

const addLikes = (comment_id) => {
  axios
    .put(
      `https://project-1-api.herokuapp.com/comments/${comment_id}/like?api_key=${api_key}`,
      {}
    )
    .then((result) => {
      updateComments();
      console.log(result);
    })

    .catch((error) => {});
};

// initilize default comments

updateComments();
