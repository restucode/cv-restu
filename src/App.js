import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//component
import Home from "./component/home/Home.js";
import FooterNavbar from "./component/layout/FooterNavbar.js";
import Navbar from "./component/layout/Navbar.js";
import Pendidikan from "./component/pendidikan/Pendidikan.js";
import Profile from "./component/profile/Profile";
import Project from "./component/project/Project.js";
import Skill from "./component/skill/Skill.js";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/pendidikan" component={Pendidikan} />
          <Route path="/skill" component={Skill} />
          <Route path="/project" component={Project} />

        </Switch>
        <FooterNavbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
