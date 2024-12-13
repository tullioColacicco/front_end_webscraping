import "./App.css";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import News from "./components/news";
import Prospects from "./components/prospects";
import { ScrapedDataProvider } from "./components/context";

function App() {
  return (
    <ScrapedDataProvider>
      <div class="container">
        <Header></Header>
        {/* <div className="content"> */}
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="news" Component={News}></Route>
          <Route path="prospects" Component={Prospects}></Route>
        </Routes>
        {/* </div> */}

        <div className="footer"></div>
      </div>
    </ScrapedDataProvider>
  );
}

export default App;
