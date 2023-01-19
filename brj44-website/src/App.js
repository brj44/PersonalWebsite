import {useState}  from "react";
import './App.css';
import Homepage from "./Homepage";
import NavBar from "./NavBar";
import Resume from "./Resume";

function App() {
    const [page, setPage] = useState("HOME");
  return (
      <div className={"background"}>
        <NavBar
            setPage={setPage}
        />
          {page === "HOME" ? <Homepage/>
              : page === "RESUME" ? <Resume/>: null}
      </div>

  );
}

export default App;
