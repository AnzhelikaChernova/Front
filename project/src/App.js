import React from "react";
//основные компоненты страницы
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

// маршрутизаторы
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// пути
import Funeral_services from "./Components/Route/Funeral_services";
import Blog from "./Components/Route/Blog"
import Info from "./Components/Route/Info";
import Cooperation from "./Components/Route/Cooperation";
import Catalog from "./Components/Route/Catalog";



const App = () =>{
    return (
      <div>
        <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Navigate to = "/content"/>}/>
            <Route path="content" element ={<Content/>}/>
            <Route path="ritualnye-uslugi" element={<Funeral_services/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="info" element={<Info/>}/>
            <Route path="sotrudnitchestvo" element={<Cooperation/>}/>
            <Route path="catalog" element={<Catalog/>}/>
        </Routes>
        
       
        <Footer />
        </Router>
      </div>
    );
}

export default App;