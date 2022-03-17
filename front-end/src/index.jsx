import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes, browserHistory} from 'react-router-dom';

// CSS
import './index.css';

// Pages
import Index from './Pages/Index';
import Destination from './Pages/Destinations';
import Promo from './Pages/Promo';
import Contact from './Pages/Contact';
import DashboardLogin from './Pages/Dashboard/Login';
import DashboardStats from './Pages/Dashboard/Stats';
import Error404 from './Pages/ErrorsCode/Error404';


ReactDOM.render(
  //<React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Index/>} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/promotions" element={<Promo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>,
  //</React.StrictMode>,
  document.body
);
