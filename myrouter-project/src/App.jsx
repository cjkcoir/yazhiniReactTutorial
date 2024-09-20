import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import User from "./Components/User";
import Oldbooks from "./Components/Oldbooks";
import Newbooks from "./Components/Newbooks";
import LoginPage from "./Components/LoginPage";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact-US</Link>
          </li>
          <li>
            <Link to="/user/1">User 1</Link>
          </li>
          <li>
            <Link to="/user/2">User 2</Link>
          </li>

          <li>
            <Link to="/books/oldbooks">Oldbooks</Link>
          </li>

          <li>
            <Link to="/books/newbooks">NewBooks</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  {" "}
                  <Link to="/">home</Link>{" "}
                </a>
                <a className="nav-link" href="#">
                  <Link to="/about">About</Link>
                </a>
                <a className="nav-link" href="#">
                  Pricing
                </a>
                <a
                  className="nav-link "
                  href="#"
                  tabIndex="-1"
                  aria-disabled=""
                >
                  <Link to="/user/1">User</Link>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/user/:id" element={<User></User>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/books">
            <Route path="oldbooks" element={<Oldbooks></Oldbooks>}></Route>
            <Route path="newbooks" element={<Newbooks></Newbooks>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
