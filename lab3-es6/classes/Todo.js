export default class Todo {

  constructor(title, priority, status) {
    // HINT🤩
    // use a constructor to set basic property values
    //this.title = title;
    this.title = title;
    this.priority = priority;
    let todoItem; //title without high, medium, low
    this.status = status;
  }

  createElement() {
    // HINT🤩
    // this method will create the HTML structure with the correct classes, based on the todo priority
    // let newNote = document.createElement("li");
    // check if the todo item includes a priority like medium: to generate the correct classnames
    // don't forget to hook up an event listener for the click event
    // return newNote;
    
    //localstorage
    //let storeItems = []; //lege array aanmaken waar alles todo's in worden geplaatst
    console.log(this.title);

    let li =document.createElement("li");
    this.status = "created";
    if(this.title.startsWith("high:")){
      li.classList.add("prior-high");
      this.priority = "high";
    }else if(this.title.startsWith("low:")){
      li.classList.add("prior-low");
      this.priority = "low";
    }else{
      li.classList.add("prior-medium");
      this.priority = "medium";
    }
    if(this.title.startsWith("high:")|| this.title.startsWith("medium:")||this.title.startsWith("low:")){
      this.todoItem = this.title.replace(/(.*):/,"");
    }else{
      this.todoItem = this.title;
    }
    
    li.innerHTML = this.todoItem;
    li.addEventListener("click", this.markDone.bind(li));
   

    return li;
    
  }

  markDone() {
    // HINT🤩
    // this function should mark the current todo as done, by adding the correct CSS class
    // if the item is clicked, but was already marked as done, remove the item from the list
    let storeTodo = JSON.parse(localStorage.getItem('todo'));
    let lookingFor = this.innerHTML;

    storeTodo.forEach((todo, index) => {
      if(lookingFor == todo.title){
        if(this.classList.contains("done")){
          console.log("click 2");
          storeTodo[index].todo = "removed";
          storeTodo.splice(index, 1)
          localStorage.setItem("todo", JSON.stringify(storeTodo));
          this.remove()
        }else{
          console.log("click 1");
          this.status = "clicked";
          storeTodo[index].todo = "clicked";
          localStorage.setItem("todo", JSON.stringify(storeTodo));
          this.classList.add("done");
        }
      }
    });
    
    console.log(storeTodo);
  }

  add(clicked) {
    // HINT🤩
    // this function should append the note to the screen somehow
    console.log("add functie");
    let todo = this.createElement(); // should return a full <li> with the right classes and innerHTML
    if(clicked){
      todo.classList.add("done");
    }
    document.querySelector("#todo-list").appendChild(todo);
    }

  saveToStorage() {
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    //localstorage
    
    /*let storeItems = []; //lege array aanmaken waar alles todo's in worden geplaatst
    
    localStorage.setItems('items', JSON.stringify(storeItems));
    const data = JSON.parse(localStorage.getItm('itmes'))

    storeItems.push(li);
  */

    let storeTodo = localStorage.getItem("todo");
    storeTodo = JSON.parse(storeTodo) || [];
    
    storeTodo.push({"priority": this.priority, "title": this.todoItem, "todo": this.status});
    
    localStorage.setItem("todo", JSON.stringify(storeTodo));
    console.log(JSON.stringify(storeTodo));

    
  }
}
