import Todo from "./Todo.js"

export default class App {
  
    constructor() {
      // HINT🤩
      // set up the enter Key
      this.setupEventListeners();
      // when the app loads, we can show previously saved items from localstorage
      this.loadFromStorage();
    }
  
    setupEventListeners() {
      // HINT🤩
      document.querySelector("#add-item-text").addEventListener("keyup", this.createItem.bind(this));
        //door .bind(this) geeft die de huidige waarde hier van this door aan de createElement functie
    
      // pressing the enter key in the text field triggers the createItem function
      // addEventListener("keyup", this.createItem.bind(this));
      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // while testing, feel free to console.log(this) to see what's in it
    }
  
    createItem(e) {
        if(e.key === "Enter"){
            let todoValue = document.querySelector("#add-item-text").value;
            let todo = new Todo(todoValue);
            todo.add();
            todo.saveToStorage();
            this.reset();
        };

        
        //this.reset(); //gaat hier niet want verwijst naar de eventlistener (als bind in setupEventListener dan krijgt die waarde mee van this en werkt het wel)
        //console.log(this); // --> van betekenis verandert tegenover setupEventListeners

      // HINT🤩
      // this function should create a new todo by using the Todo() class
      // new Todo(text)
      // todo.add();
      // todo.saveToStorage();
      // if you used bind() in the previous function, you'll notice that this refers to the current class instance
      // clear the text field with .reset() after adding the item
      // if (e.key === "Enter")
    }
  
    loadFromStorage() {
      // load all items from storage here and add them to the screen
      let storeTodo = JSON.parse(localStorage.getItem('todo'));

      //if storage is not empty
      if(storeTodo !== null) {
        //print all the items
        storeTodo.forEach((title) => {
          let todo = new Todo(`${title['priority']}:${title['title']}`);
          if(title['todo'] === "clicked"){
            console.log("click todo");
            console.log(todo)
            todo.add("clicked");
          }else {
            todo.add();
          }              
      });
    }
}

    
  
    reset() {
      // this function should reset the form / clear the text field
      document.querySelector("#add-item-text").value="";
    }
  }
  