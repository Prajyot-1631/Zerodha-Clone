// import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/Home";

function App() {
  useEffect(() => {
    //window.location.search = gets the part of the URL after " ? "
    //new URLSearchParams(...) = helps extract the token from it.
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromURL = urlParams.get("token");

    if (tokenFromURL) {
      //if token found , save it in url
      localStorage.setItem("token", tokenFromURL);
      //window.history.replaceState(...) = updates the url to remove text after " ? "
      window.history.replaceState({}, document.title, "/");
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
