import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Orange from './orange';
import Yellow from './yellow';

class Red extends React.Component {
  render() {
    return(
      <div>
        <h2 className="red"></h2>
        {/* Links here */}
        <NavLink to="/red/orange">Orange</NavLink>
        <NavLink to="/red/yellow">Yellow</NavLink>
        <NavLink exact to="/red">Red Only</NavLink>
        {/* Routes here */}
        <Route path="/red/orange" component={Orange}></Route>
        <Route path="/red/yellow" component={Yellow}></Route>
      </div>
    );
  }
};

export default Red;
