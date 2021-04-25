import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Card from "./component/Card";
import ShopingCart from "./component/ShopingCart";

function App() {
    const [money, setMoney] = useState(100);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
        return () => {
            console.log("clean up");
        };
    }, []);

    return (
        <>
            {money !== 0 ? (
                <Header money={money} />
            ) : (
                <h1 className="all-center bg-danger">Yeterli paranız Yok</h1>
            )}
            <div style={{ width: "100%" }} className="all-center grid-4">
                <Card
                    money={money}
                    cart={cart}
                    setCart={setCart}
                    setMoney={setMoney}
                    products={products}
                />
                <ShopingCart
                    cart={cart}
                    setCart={setCart}
                    money={money}
                    setMoney={setMoney}
                />
            </div>
        </>
    );
}

export default App;
