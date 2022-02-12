const elementCreator = (element, classes, appenedParent)=> {
    let el = document.createElement(element);
    let classList = classes.split(" ");
  
       classList.forEach((className)=>{
        el.classList.add(className);
       })
    appenedParent.appendChild(el);
    return el;
  
  }