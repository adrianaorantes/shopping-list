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
    <div className="App" id="square">
      <header className="App-header">
          <h1>ShopNotes</h1>
          <p><b>Personal Shopping List App for Easy On-The-Go Access </b></p>
         
      </header>

      <h2> <b>My Shopping List</b> </h2>
      <p> </p>

 <ul>
   <br></br>
          {/* //turns array of items into a map */}
          {this.state.items.map(item => (
            <li>
               {item.name},  ${item.price}
            </li>
            
          ))}
          <br></br>
          </ul>


       <h4><b>ADD NEW ITEM:</b></h4> 
        <form  onSubmit={this.submitForm}>
          
          <p><b>Name of Product:</b></p>
          <input type="text" onChange={this.changeInputName} />
          <br></br>
          <br></br>
          <p><b>Price of Product:</b></p>
          <input type="text" onChange={this.changeInputPrice} />
          <br></br>
          <br></br>
          <input type="reset" defaultValue="Reset"   />  
          <button type="submit" >Submit </button>
          
     
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
