import Header from "./Header";
import "./App.css"
function App() {
  return (
    <div>
      <Header/>
      <div className="wrapper">
        <button className="add-btn">ADD</button>
        <div className="grid-container">
          <span className="grid-item name-span">NAME</span>
          <span className="grid-item phone-span">PHONE</span>
        </div>
      </div>
    </div>
  );
}

export default App;
