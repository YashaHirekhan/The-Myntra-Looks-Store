
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormLayout from "./components/FormLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Stores from "./pages/Stores"; 
import LookPage from "./pages/LookPage";
import { RequireAuth, NotRequireAuth } from "./routes/routes";
import CollabCart from "./pages/CollabCart";
import AddLook from "./pages/AddLook";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FormLayout />}>
          <Route
            path="/login"
            element={
              <NotRequireAuth>
                <Login />
              </NotRequireAuth>
            }
          />
          <Route
            path="/signup"
            element={
              <NotRequireAuth>
                <Signup />
              </NotRequireAuth>
            }
          />
        </Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/search/:query"
          element={
            <RequireAuth>
              <Search />
            </RequireAuth>
          }
        />
        <Route
          path="/stores" 
          element={
            <RequireAuth>
              <Stores />
            </RequireAuth>
          }
        />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/LookPage"
          element={
            <RequireAuth>
              <LookPage/>
            </RequireAuth>
          }
        />

        <Route
          path="/CollabCart"
          element={
            <RequireAuth>
              <CollabCart/>
            </RequireAuth>
          }
        />

        <Route
          path="/addlook"
          element={
            <RequireAuth>
              <AddLook/>
            </RequireAuth>
          }
        />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
