import React, { useEffect, useState } from 'react'
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Products, Navbar, Cart } from './components';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);

        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });

        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart)
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);
    return (
        <Router>
            <Navbar totalItems={cart.total_items} />
            <Switch>
                <Route exact path="/"><Products products={products} onAddToCart={handleAddToCart} /></Route>
                <Route exact path="/cart"><Cart cart={cart} /></Route>
            </Switch>
        </Router>
    )
}

export default App
