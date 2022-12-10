import "./App.css";
import Homepage from "./components/Homepage";
import MyNavBar from "./components/MyNavBar";

function App() {
  return (
    <div className="App">
      <div id="s1" className="container-fluid">
        <div id="n1" className="row">
          <div id="first" className="col-2">
            <MyNavBar />
          </div>
          <div id="col-10" className="col-10 pl-5">
            <Homepage />
          </div>
          {/* Footer */}
        </div>
      </div>
    </div>
  );
}

export default App;
