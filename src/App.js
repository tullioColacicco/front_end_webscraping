import "./App.css";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import News from "./components/news";
import Soto from "./components/soto";

function App() {
  return (
    <div class="container">
      <Header></Header>
      {/* <div className="content"> */}
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="news" Component={News}></Route>
        <Route path="soto" Component={Soto}></Route>
      </Routes>
      {/* </div> */}

      <div className="footer"></div>
    </div>
  );
}

export default App;
