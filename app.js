const Segundos = () => {
    const [contador, setContador] = React.useState(1)

    const aumentar = () => setContador(contador + 1)
    const disminuir = () => setContador(contador - 1)

    return (
        <div>
            <h1  className= {contador<0 ? "menor" : contador>0 ? "mayor" : null}># de clicks: {contador}</h1>
            <hr />
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    );
}

ReactDOM.render(<Segundos />, document.getElementById("root"));
