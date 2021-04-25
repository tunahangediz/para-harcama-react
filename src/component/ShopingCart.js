function ShopingCart({ cart, setCart, money, setMoney }) {
    const emptyBasket = () => {
        setCart([]);
        setMoney(100);
    };

    return (
        <div className="cart">
            <button onClick={emptyBasket} className="btn bg-primary">
                Sepeti Boşalt
            </button>
            <ul>
                {cart.map((element) => (
                    <li key={element.id}>
                        {element.title + " x" + element.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShopingCart;
