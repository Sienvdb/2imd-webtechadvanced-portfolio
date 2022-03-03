export default class Todo {
  constructor(title) {
    // HINT🤩
    // use a constructor to set basic property values
    //this.title = title;
  }

  createElement() {
    // HINT🤩
    // this method will create the HTML structure with the correct classes, based on the todo priority
    // let newNote = document.createElement("li");
    // check if the todo item includes a priority like medium: to generate the correct classnames
    // don't forget to hook up an event listener for the click event
    // return newNote;
    let li =document.createElement("li");
    let valueInput = document.querySelector("#add-item-text").value;
    let todoItem;
    if(valueInput.includes("high:")){
      li.classList.add("prior-high");
    }else if(valueInput.includes("low:")){
      li.classList.add("prior-low");
    }else{
      li.classList.add("prior-medium");
    }
    if(valueInput.includes("high:")|| valueInput.includes("medium:")||valueInput.includes("low:")){
      todoItem = valueInput.replace(/(.*):/,"");
    }else{
      todoItem = valueInput;
    }
    li.innerHTML = todoItem;
    li.addEventListener("click", this.markDone.bind(li));
    return li;
  }

  markDone(li) {
    // HINT🤩
    // this function should mark the current todo as done, by adding the correct CSS class
    // if the item is clicked, but was already marked as done, remove the item from the list
    console.log(this)
    this.classList.add("done");
    this.addEventListener("click", function(e){
      console.log("yoepieeee");
      this.remove();
    } )
  }

  add() {
    // HINT🤩
    // this function should append the note to the screen somehow
    let todo = this.createElement(); // should return a full <li> with the right classes and innerHTML
    document.querySelector("#todo-list").appendChild(todo);
    }

  saveToStorage() {
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
}
