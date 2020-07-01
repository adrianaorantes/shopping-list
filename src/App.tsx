import React from 'react';
import './App.css';
import { ReactComponent } from '*.svg';
import { listenerCount } from 'process';


//we need a class shopping item
//we create classes to be good at organizin gour code 
//create an pbject wehen we need to add somethign to the list 
//newItem = new ShoppingItem();
class ShoppingItem{
  public name = "";
  public price = 0.0;
}

//creating instances of ShoppingItem class
const pizza: ShoppingItem = {name: "Pizza", price: 4.5 }
const eggs: ShoppingItem = {name: "Eggs", price: 1.5 }
const milk: ShoppingItem = {name: "Milk", price: 2.0 }

//define the state that contains current todo list
//define what an object should look like to any code that access it 
//define properties 
interface AppState{
  items: Array<ShoppingItem>;
  //items.add(pizza);
}


//we switch from function to class bc functions do a specific thing and classes do multiple things
class App extends React.Component<{}, AppState>{
  //runs whenevr a new class object is created
  //a class is not just for defining what an object looks like, also how it works
  //interface defines what an object looks like
  //class is more complicated than an interface
  //when you create an object instance of a class the constructor runs
  //anything you need to do when you run an object
  constructor(props: any, state: AppState) {
    super(props, state);
    this.state = { items: [pizza, milk, eggs] };
    
    //this.state.items.push(milk);
  }
  //renders the html (interprets) to display content to a page
  //gets called every single time react detetcts a change in one of my compoenents
  render(){
  return (
    <div className="App">
      <header className="App-header">
          <b>Shopping List</b>
          <p> This is a shopping list app! You can add a item to the list below, along with the price. Enjoy! </p>
      </header>
      <h1> These are the items: </h1>


          {/* //turns array of items into a map */}
          {this.state.items.map((item) => (
          <li>
            Name of product: {item.name}
          <br />
          Price: ${item.price}
          </li>
          ))}


      <p>  </p>
    </div>
  );
  }
}


export default App;
