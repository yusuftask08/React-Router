import * as React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User";
function App() {
  return (
    <div >
      <header>
        <h1>Welcome to React Router!</h1>
      </header>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <NavLink activeStyle={{ backgroundColor: 'black', color: '#fff' }} to="/about">About</NavLink>
        <NavLink activeStyle={{ backgroundColor: 'black', color: '#fff' }} to="/users">User</NavLink>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">User</NavLink>
      </nav>
    </>
  );
}

export default App;