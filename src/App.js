import React, { useContext, useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './compontents/Hero';
import Products from './compontents/Menu';
import PizzaDetails from './compontents/PizzaDetails';
import { pizzaData } from './compontents/Menu/data';
import Context from './store/context';
import Koszyk from './compontents/Koszyk';


function App() {
  const { state } = useContext(Context);

  const [Cart, setCart] = useState([])
  const additem = (product) => {
    const exist = Cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(Cart.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
    }
    else {
      setCart([...Cart, { ...product, qty: 1 }]);
    }
  }
  const removeitem = (product) => {
    const exist = Cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(Cart.filter(x => x.id !== product.id));
    } else {
      setCart(Cart.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  }
  const wipeCart = () => {
    setCart([]);
  }
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/cart" >
          <Koszyk Cart={Cart} additem={additem} removeitem={removeitem} wipeCart={wipeCart} />
        </Route>
        <Route path="/menu" >
          <Products data={pizzaData} head='test' />
        </Route>
        <Route path="/ProductDetails" >
          <PizzaDetails attachedId={state.value} additem={additem} removeitem={removeitem} wipeCart={wipeCart} />

        </Route>
        <Route path="/" component={Hero} />

      </Switch>
    </Router>
  );
}

export default App;
