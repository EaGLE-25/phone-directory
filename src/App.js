import React,{Component} from "react";
import Header from "./Header";
import "./App.css"

class App extends Component{
  constructor(){
    super();
    this.state={
      subscribers : []
    }
  }

  componentDidMount(){
    const state = this.state;
    const newSubscriber = {
      id:1,
      name:"Sai Darshan",
      phone:"8951426231"
    }
    state.subscribers.push(newSubscriber);
    this.setState(state);
  }

  render(){
    function deleteHandler(){
      alert("delete clicked");
    };

    return(
      <div>
      <Header headerName="Phone Directory"/>
      <div className="wrapper">
        <button className="btn add-btn">ADD</button>
        <div className="grid-container">
          <span className="grid-item name-span heading">NAME</span>
          <span className="grid-item phone-span heading">PHONE</span>
        </div>
        {
          this.state.subscribers.map(subscriber=>{
            return <div key={subscriber.id} className="grid-container">
              <span className="grid-item name-span">{subscriber.name}</span>
              <span className="grid-item phone-span">{subscriber.phone}</span>
              <button className="btn delete-btn" onClick={deleteHandler}>DELETE</button>
            </div>
          })
        }
      </div>
    </div>
    )
  }
}


export default App;
