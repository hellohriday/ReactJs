import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
import UserContextProvider from "./components/MiniContext/context/UserContextProvider.jsx";
import Login from "./components/MiniContext/Login.jsx";
import Profile from "./components/MiniContext/Profile.jsx";
import ThemeSwitcherManager from "./components/ThemeSwitcher/ThemeSwitcherManager.jsx";
import Layout from "./Layout.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contactus",
//         element: <ContactUs />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="signin" element={<Login />} />
      <Route path="userprofile" element={<Profile />} />
      <Route path="themeswitcher" element={<ThemeSwitcherManager />} />
      {/* <Route path="/user/github" element={<Github />} /> */}

      <Route
        path="/user/github"
        loader={() => githubInfoLoader()}
        element={<Github />}
      />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
