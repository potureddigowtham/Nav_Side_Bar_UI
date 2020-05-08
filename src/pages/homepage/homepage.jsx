import React from "react";

import { Switch, Route } from "react-router-dom";
import './homepage.scss';
import SideBar from "../../components/sidebar/sidebar.component";

const HomePage = () => (
  <div>
    <h1> HomePage </h1>
  </div>
);

const ShopPage = () => (
  <div>
    <h1> ShopPage </h1>
  </div>
);

const SignInAndSignUpPage = () => (
  <div>
    <h1> SignInAndSignUpPage </h1>

  </div>
);

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="sidebar">
        <SideBar />
        </div>
        <div className='main'>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUpPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Homepage;
