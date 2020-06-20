import React from 'react';
import { Redirect,Link,BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Category from './component/Category';
import Products from './component/Products';
import {Login,fakeAuth} from './component/Login'
function App() {
    function Home(){
      return(
        <h1>Home</h1>
      );

    }
    const PrivateRoute = ({component: Component, authed, ...rest}) => {
      return (
        <Route
          {...rest}
          render={(props) => authed === true
            ? <Component {...props} />
            : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
      )
    }
    return (
      <Router>
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/Login">Login</Link></li>

          </ul>
       </nav>

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/category" component={Category}/>
       <Route path="/products" component={Products}/>
       <PrivateRoute authed={fakeAuth.isAuthenticated} path='/products' component = {Products} />

    </Switch>

    </div>
    </Router>
    );
  }

export default App;