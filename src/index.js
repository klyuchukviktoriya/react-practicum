import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Sidebar from "./pages/Sidebar/Sidebar";
import Footer from "./pages/Foooter/Foooter";
// import App from './App';
import "./global.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <div className="container">
            {/* <App /> */}
            <Header />
            <Main />
            <Sidebar />
            <Footer />
        </div>
    </React.StrictMode>
);
