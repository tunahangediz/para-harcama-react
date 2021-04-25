function Card({ products, setMoney, setCart, cart, money }) {
    const parayıDusur = (price) => {
        setMoney((prevMoney) =>
            prevMoney >= price ? prevMoney - price : prevMoney,
        );
    };

    const addBasket = (product) => {
        const checkCart = cart.find((item) => item.id === product.id);
        ///ürün daha önce eklendiyse

        if (checkCart) {
            const newCart = cart.map((item) =>
                item.id === product.id
                    ? { ...item, amount: item.amount + 1 }
                    : item,
            );

            setCart(newCart);
            console.log(cart);
        }
        ///ürün daha önce eklenmediyse
        else {
            setCart([
                ...cart,
                { id: product.id, title: product.title, amount: 1 },
            ]);
        }
    };

    return products.map((product) => {
        return (
            <div key={product.id} className="card bg-light">
                <div className="card-header">
                    <h1>{product.title}</h1>
                </div>
                <div className="card-body">
                    <img src={product.src} alt="" />
                    <h3>Price:{product.price}$</h3>

                    <button
                        onClick={() => {
                            if (product.price <= money) {
                                parayıDusur(product.price);
                                addBasket(product);
                            }
                        }}
                        className="btn bg-success my-1"
                    >
                        Satın Al
                    </button>
                </div>
            </div>
        );
    });
}

export default Card;
