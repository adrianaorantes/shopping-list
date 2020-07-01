import React from 'react';
import './App.css';
import { ReactComponent } from '*.svg';


//we need a class shopping item
//we create classes to be good at organizin gour code 
//create an pbject wehen we need to add somethign to the list 
//newItem = new ShoppingItem();
class ShoppingItem{
  public name = "";
  public price = 0.0;
}

//define the state, it is a list
interface AppState{
  items: Array<string>;
}

//we switch from function to class bc functions do a specific thing and classes do multiple things
class App extends React.Component<{}, AppState>{
  //renders the html (interprets)
  render(){
  return (
    <div className="App">
      <header className="App-header">
          Shopping list
      </header>
      <h1> These are the items: </h1>
    </div>
  );
  }
}

export default App;
