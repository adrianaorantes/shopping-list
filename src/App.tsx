import React from 'react';
import './App.css';
import { ReactComponent } from '*.svg';
import { listenerCount } from 'process';


//we need a class shopping item
class ShoppingItem{
  public name = "";
  public price = 0.0;
}

/*creating instances of ShoppingItem class
const pizza: ShoppingItem = {name: "Pizza", price: 4.5 }
const eggs: ShoppingItem = {name: "Eggs", price: 1.5 }
const milk: ShoppingItem = {name: "Milk", price: 2.0 }
*/

//define the state that contains current todo list
interface AppState{
  items: Array<ShoppingItem>;
}


//we switch from function to class bc functions do a specific thing and classes do multiple things
class App extends React.Component<{}, AppState>{
  
  constructor(props: any, state: AppState) {
    super(props, state);
    this.state = { items: [] };

  }
  //renders the html (interprets) to display content to a page
  render(){
  return (
    <div className="App">
      <header className="App-header">
          <b>Shopping List</b>
          <p> This is a shopping list app! You can add an item to the list below, along with the price. Enjoy! </p>
      </header>
      <h1> These are the items: </h1>

      <ul>
          {/* //turns array of items into a map */}
          {this.state.items.map(item => (
            <li>
              Name of Product: {item.name}
            <br />
              Price: ${item.price}
            </li>
          ))}
        </ul>
        <p>  </p>
        <form onSubmit={this.submitForm}>
          <input type="text" placeholder="Enter a name..." onChange={this.changeInputName} />
          <input type="text" placeholder="Price..." onChange={this.changeInputPrice} />
          <input type="submit" placeholder="Submit"/>
        </form>
        <br></br>
        <br></br>
    </div>
  );
  }
  private inputName = "";
  private inputPrice = "";

  private changeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.inputName = event.target.value;
  }
  private changeInputPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.inputPrice = event.target.value;
  }

  // constraining the type of the event 
  private submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /*generate an alert with the value of the textbox
    alert("Name: " + this.inputName + "\nPrice: " + this.inputPrice);*/
  
    // updating the state of the component
    //create a new ShoppingItem object with private variables
    const newItem: ShoppingItem = {name: this.inputName, price: parseFloat(this.inputPrice)}


    this.setState({
      //create new array list of type ShoppingItem and concatanate original items list with new item object
      items: this.state.items.concat(newItem)
    });

  };
}

export default App;
