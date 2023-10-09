// Imports
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import Routes from "../routes/Routes";
import SideBar from "../components/SideBar/SideBar";

// CSS Import
import "./App.scss";

function App() {
  const { isLoggedIn } = useSelector((state) => state.authSlice);

  return (
    <main className="main">
      {isLoggedIn && <SideBar />}
      <div className="main__div">
        {isLoggedIn && <Header />}
        <Routes />
      </div>
    </main>
  );
}

export default App;
