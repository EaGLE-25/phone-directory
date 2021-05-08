import Header from "./Header";
import "./App.css"
function App() {
  let persons = [
    {
      id:1,
      name:"Sai Darshan",
      phone:"8951426231"
    },
    {
      id:2,
      name:"Doyle",
      phone:"7019879155"
    }
  ]

  function deleteHandler(){
    alert("delete clicked");
  }
  return (
    <div>
      <Header headerName="Phone Directory"/>
      <div className="wrapper">
        <button className="add-btn">ADD</button>
        <div className="grid-container">
          <span className="grid-item name-span heading">NAME</span>
          <span className="grid-item phone-span heading">PHONE</span>
        </div>
        {
          persons.map(person=>{
            return <div key={person.id} className="grid-container">
              <span className="grid-item name-span">{person.name}</span>
              <span className="grid-item phone-span">{person.phone}</span>
              <button className="delete-btn" onClick={deleteHandler}>DELETE</button>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
