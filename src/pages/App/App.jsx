import React, { useState } from 'react';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
=======
import { Routes, Route, Navigate } from 'react-router-dom';
>>>>>>> c5a2aa2 (Starter code for shopping cart)
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
<<<<<<< HEAD
import NavBar from '../../components/NavBar/NavBar';
=======
>>>>>>> c5a2aa2 (Starter code for shopping cart)

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
<<<<<<< HEAD
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
=======
        <Routes>
          {/* client-side route that renders the component instance if the path matches the url in the address bar */}
          <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
          {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
          <Route path="/*" element={<Navigate to="/orders/new" />} />
        </Routes>
>>>>>>> c5a2aa2 (Starter code for shopping cart)
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
