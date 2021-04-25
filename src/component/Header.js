function Header({ money }) {
    return (
        <div className="text-center text-success my-1">
            <h1>Harcamak için {money}$ paranız var</h1>
        </div>
    );
}

export default Header;
