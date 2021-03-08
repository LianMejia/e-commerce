import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Product from './product/Product';
/* import Products from './products/Products'; */

function App(){
    return (
        <BrowserRouter>
           <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/product" component={Product} />
              {/* <Route exact path="/products" component={Products} /> */}
           </Switch>
        </BrowserRouter>
    );
}

export default App;